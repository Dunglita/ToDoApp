-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-01-2022 a las 02:19:14
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `todomanager`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `folder`
--

CREATE TABLE `folder` (
  `idFolder` varchar(6) COLLATE utf8_spanish_ci NOT NULL,
  `titleFolder` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `descriptionFolder` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `idUser` varchar(6) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `folder`
--

INSERT INTO `folder` (`idFolder`, `titleFolder`, `descriptionFolder`, `idUser`) VALUES
('1', 'Casa', 'Tareas de mi casa', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `todo`
--

CREATE TABLE `todo` (
  `idTodo` varchar(6) COLLATE utf8_spanish_ci NOT NULL,
  `titleTodo` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `descriptionTodo` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `idTodoState` varchar(6) COLLATE utf8_spanish_ci NOT NULL,
  `idFolder` varchar(6) COLLATE utf8_spanish_ci NOT NULL,
  `idUser` varchar(6) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `todo`
--

INSERT INTO `todo` (`idTodo`, `titleTodo`, `descriptionTodo`, `idTodoState`, `idFolder`, `idUser`) VALUES
('1', 'Buy Bread', 'Go to the bakery and grab bread on my way home', '1', '1', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `todostate`
--

CREATE TABLE `todostate` (
  `idTodoState` varchar(6) COLLATE utf8_spanish_ci NOT NULL,
  `nameTodoState` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `modificationDateTodoState` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `todostate`
--

INSERT INTO `todostate` (`idTodoState`, `nameTodoState`, `modificationDateTodoState`) VALUES
('1', 'En Progreso', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `idUser` varchar(6) COLLATE utf8_spanish_ci NOT NULL,
  `user` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(15) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`idUser`, `user`, `password`) VALUES
('1', 'Dani', 'ensolvers');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `folder`
--
ALTER TABLE `folder`
  ADD PRIMARY KEY (`idFolder`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `todo`
--
ALTER TABLE `todo`
  ADD PRIMARY KEY (`idTodo`),
  ADD KEY `idTodoState` (`idTodoState`),
  ADD KEY `idFolder` (`idFolder`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `todostate`
--
ALTER TABLE `todostate`
  ADD PRIMARY KEY (`idTodoState`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `folder`
--
ALTER TABLE `folder`
  ADD CONSTRAINT `folder_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`);

--
-- Filtros para la tabla `todo`
--
ALTER TABLE `todo`
  ADD CONSTRAINT `todo_ibfk_1` FOREIGN KEY (`idTodoState`) REFERENCES `todostate` (`idTodoState`),
  ADD CONSTRAINT `todo_ibfk_2` FOREIGN KEY (`idFolder`) REFERENCES `folder` (`idFolder`),
  ADD CONSTRAINT `todo_ibfk_3` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
