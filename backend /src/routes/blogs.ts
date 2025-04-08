import { PrismaClient } from '@prisma/client/edge'
import { Hono } from "hono";
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, verify } from "hono/jwt";

export const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string
        JWT_SECRET:string
      },
      Variables:{
        userId:string;
      }
}>();

blogRouter.use("/*", async (c,next)=>{

    const token=c.req.header("authorization")||"";
    console.log(token);

    try {
        const user = await verify(token, c.env.JWT_SECRET);
    
        if (user && user.id) {
          console.log("User ID from JWT:", user.id);
          c.set("userId", user.id as string);
          await next(); // allow route to proceed
        } else {
          return c.json({ message: "Unauthorized" }, 401); // invalid user
        }
      } catch (err) {
        return c.json({ message: "Invalid or expired token" }, 401);
      }

})

blogRouter.post('/writeblog', async (c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    
    const body = await c.req.json();
    const userId=c.get("userId");

    const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId:userId
		}
	});

    return c.json({
        message:"Posted your blog ",id:post.id
    })
})

blogRouter.put('/updateblog', async (c)=>{

    const userId = c.get('userId');

    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

    const body = await c.req.json();

    const existingPost = await prisma.post.findUnique({
        where: {
            id: body.id,
        },
    });

    if (!existingPost || existingPost.authorId !== userId) {
        return c.json({ message: "Post not found or you're not authorized to edit it." }, 404);
    }


    const post = await prisma.post.update({
        where: {
            id: body.id,
        },
        data: {
            title: body.title,
            content: body.content,
        },
    });

    return c.json({
        message:"Edited your blog ",id:post.id
    })
})

// pagination in this so that all the posts are not shoved in the web page 
blogRouter.get('/bulk',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    const posts=await prisma.post.findMany();

    c.status(200);  
    return c.json({
        message:"All the posts are here !",posts
    })
})


blogRouter.get('/:id', async (c)=>{

    const id =c.req.param("id");

    const prisma = new PrismaClient({   
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());


    try{
        const post = await prisma.post.findFirst({
            where:{
                id:Number(id)
            }
        });

        return c.json({
            post
        })
    }
    catch(e)
    {
        c.status(409);
        return c.json({
            message:"Error finding the blog"
        })
    }
  
})


