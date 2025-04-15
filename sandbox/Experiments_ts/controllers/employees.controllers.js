import { prisma } from '../prisma/prisma-client.js';


const all = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany();

        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees' });
    }
}

const add = async (req, res) => {
    try {
        const data = req.body;

        if (!data.firstName || !data.lastName || !data.address || !data.age) {
            return res.status(400).json({ message: 'First name, last name, address and age are required' });
        }

        const registeredEmployee = await prisma.employee.findFirst({
            where: {
              firstName: data.firstName,
              lastName: data.lastName,
            }
          });

            if (registeredEmployee) {
                return res.status(400).json({ message: 'Employee already exists' });
            }

        const newEmployee = await prisma.employee.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                age: data.age,
                user: {
                    connect: { id: req.user.id }
                }
            }
        });
        res.status(201).json(newEmployee);

    } catch (error) {
        res.status(500).json({ message: 'Error adding employee' });
    }
}

const remove = async (req, res) => {
    const { id } = req.body;

    try {
        if (!id) {
            return res.status(400).json({ message: 'Id is required' });
        }

        await prisma.employee.delete({
            where: {
                id: id
            }
        });

        res.status(201).json({ message: 'Employee removed' });

    } catch (error) {
        res.status(500).json({ message: 'Error removing employee' });
    }
}

const edit = async (req, res) => {
    const data = req.body;
    const id = data.id;

    try {
        if (!id || !data.firstName || !data.lastName || !data.address || !data.age) {
            return res.status(400).json({ message: 'Id, first name, last name, address and age are required' });
        }

        await prisma.employee.update({
            where: {
                id: id
            },
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                age: data.age
            }
        });

        res.status(204).json({ message: 'Employee updated' });

    } catch (error) {
        res.status(500).json({ message: 'Error updating employee' });
    }
}

const employee = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Id is required' });
        }

        const employee = await prisma.employee.findUnique({
            where: {
                id
            }
        });

        res.status(200).json(employee);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching employee' });
    }
}

export { all, add, remove, edit, employee };