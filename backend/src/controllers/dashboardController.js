const prisma = require("../prisma");

exports.getDashboardStats = async (req, res) => {
  try {
    const totalTasks = await prisma.task.count();

    const completedTasks = await prisma.task.count({
      where: {
        status: "DONE",
      },
    });

    const inProgressTasks = await prisma.task.count({
      where: {
        status: "IN_PROGRESS",
      },
    });

    const todoTasks = await prisma.task.count({
      where: {
        status: "TODO",
      },
    });

    const overdueTasks = await prisma.task.count({
      where: {
        dueDate: {
        lt: new Date(),
      },
        status: {
        not: "DONE",
      },
      },
    });

    res.status(200).json({
      totalTasks,
      completedTasks,
      inProgressTasks,
      todoTasks,
      overdueTasks,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};