const prisma = require("../prisma");

// CREATE TASK
exports.createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      projectId,
      assignedToId,
      dueDate,
    } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        projectId,
        assignedToId,
        dueDate: dueDate ? new Date(dueDate) : null,
      },
    });

    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// GET ALL TASKS
exports.getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        project: true,
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
    });

    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// UPDATE TASK STATUS
exports.updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const { status } = req.body;

    const updatedTask = await prisma.task.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    res.status(200).json({
      message: "Task updated successfully",
      updatedTask,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};