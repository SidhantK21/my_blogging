import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import bcrypt from "bcryptjs";
import { decode, sign, verify } from 'hono/jwt'

export const userRouter = new Hono<{
    Bindings:{
      DATABASE_URL:string
      JWT_SECRET:string
    }
  }>();

userRouter .post('/signin',async (c)=>{

  const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

  const body = await c.req.json();

  const user=await prisma.user.findUnique({
    where:{
      email:body.email,
      
    }
  })

   if(!user)
   {
     c.status(403);
      return c.json({
      error:"User not found"
    })
  }

  const passwordMatch = await bcrypt.compare(body.password, user.password);

  if (!passwordMatch) {
    c.status(401);
    return c.json({ error: "Incorrect password" });
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  c.status(200);
    return c.json({
    message:"SignIn successfull",jwt
  });
  
})

userRouter.post('/signup',async (c)=>{

  const jwtsec=c.env.JWT_SECRET;

  const prisma=new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body =await c.req.json();

  const saltRounds = 10;

  // this will hash it 
  const hashedPassword=await bcrypt.hash(body.password,saltRounds);

  const userExists=await prisma.user.findUnique({
    where:{
      email:body.email
    }
  })

  if(userExists){
    c.status(409);
    return c.json({ error: "Email already exists Try with another" });
  }

  const user=await prisma.user.create({
      data:{
        name:body.name,
        email:body.email,
        password:hashedPassword
      }
  })

  const token=await sign({
      id:user.id,
      role:'admin',
      exp:Math.floor(Date.now() / 1000) + 60 * 5,
    },jwtsec
  )
    
  c.status(200);
  return c.json({
    message:"SignUp successfull",
    token
  })
})
