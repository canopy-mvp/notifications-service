import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function templateRoutes(app: any) {
  app.get('/v1/templates', async (req: any, reply: any) => {
    const templates = await prisma.template.findMany();
    return reply.send({ data: templates });
  });

  app.post('/v1/templates', async (req: any, reply: any) => {
    const { name, subject, body, channel } = req.body as any;
    const template = await prisma.template.create({ data: { name, subject, body, channel } });
    console.log('Template created:', template.id);
    return reply.status(201).send({ data: template });
  });
}
