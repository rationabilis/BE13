const User = require("../models/user");

/* Возвращает всех пользователей */
module.exports.getAllUsers = (req, res) => {
	User.find({})
		.then((users) => res.send({ data: users }))
		.catch((err) => res.status(500).send({ message: `Возникла ошибка ${err.message}` }));
};

/* Возвращает пользователя по _id */
module.exports.getUser = (req, res) => {
	User.findById(req.params.id)
		.then((user) => res.send({ data: user }))
		.catch((err) => res.status(500).send({ message: `Возникла ошибка ${err.message}` }));
};

/* Создаёт пользователя */
module.exports.createUser = (req, res) => {
	const { name, about, avatar } = req.body;

	User.create({ name, about, avatar })
		.then((user) => res.send({ data: user }))
		.catch((err) => res.status(500).send({ message: `Возникла ошибка ${err.message}` }));
};

/* Обновляет профиль */
module.exports.renewUser = (req, res) => {
	const { name, about, avatar } = req.body;

	User.findByIdAndUpdate(
		req.params.id,
		{ name, about, avatar },
		{
			new: true,
			runValidators: true,
			upsert: true,
		}
	)
		.then((user) => res.send({ data: user }))
		.catch((err) => res.status(500).send({ message: `Возникла ошибка ${err.message}` }));
};

/* Обновляет аватар */
module.exports.renewUserAvatar = (req, res) => {
	const { avatar } = req.body;

	User.findByIdAndUpdate(
		req.params.id,
		{ avatar },
		{
			new: true,
			runValidators: true,
			upsert: true,
		}
	)
		.then((user) => res.send({ data: user }))
		.catch((err) => res.status(500).send({ message: `Возникла ошибка ${err.message}` }));
};