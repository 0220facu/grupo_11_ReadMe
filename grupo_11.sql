-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: grupo_11
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.16-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `year` varchar(5) NOT NULL,
  `price` decimal(10,0) unsigned NOT NULL,
  `language` varchar(20) NOT NULL,
  `synopsis` text DEFAULT NULL,
  `pages` varchar(10) NOT NULL,
  `famous` int(1) DEFAULT NULL,
  `image` varchar(100) NOT NULL,
  `editorial_id` int(10) unsigned DEFAULT NULL,
  `category_id` int(10) unsigned DEFAULT NULL,
  `writer_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `editorial_id` (`editorial_id`),
  KEY `category_id` (`category_id`),
  KEY `writer_id` (`writer_id`),
  CONSTRAINT `books_ibfk_1` FOREIGN KEY (`editorial_id`) REFERENCES `editorials` (`id`),
  CONSTRAINT `books_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `books_ibfk_3` FOREIGN KEY (`writer_id`) REFERENCES `writers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'Caperucita Roja','1991',1000,'Español','Una niña vestida de rojo es interceptada por un lobo malvado camino a la casa de su abuela         ','260',1,'caperucitaroja.jpg',1,5,1,'2021-01-09 15:11:31','2021-03-08 23:02:12',NULL),(2,'Master Cheff','2020',5000,'Español','Guias paso a paso para aprender a cocinar junto con uno de los Cheff mas reconocidos de la Argentina   ','95',0,'1615238189216-cocina.jpg',2,4,2,'2021-01-09 15:15:39','2021-03-08 21:16:29',NULL),(6,'Astronomia para princiantes','2015',12000,'Español','El libro trata temas como la posibilidad de encontrar vida en otros planetas o el futuro del Sistema Solar. Y cuenta con un atractivo añadido: más de 250 espectaculares fotos en color.        ','355',0,'cuadernodeciencia.jpg',2,6,3,'2021-01-09 15:34:53','2021-03-05 23:44:50',NULL),(7,'Html y Css','2009',120,'Español','Desarrolla tus habilidades con el Front-End a traves de Html y Css! Con este libro aprenderas a diseñar las vistas de tus paginas web      ','102',1,'1615244956639-html.png',3,7,4,'2021-01-09 15:37:51','2021-03-08 23:09:41',NULL),(15,'Star Wars.','1991',29000,'español',' La nave en la que viaja la princesa Leia es capturada por las tropas imperiales al mando del temible Darth Vader. Antes de ser atrapada','1000',1,'1615244633464-starwars.jpg',4,8,1,'2021-03-08 23:03:53','2021-03-08 23:03:53',NULL);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (2,'Suspenso','2021-01-07 19:20:03',NULL,NULL),(3,'Terror','2021-01-07 19:20:03',NULL,NULL),(4,'Cocina','2021-01-07 19:20:03',NULL,NULL),(5,'Niños','2021-01-07 19:20:03',NULL,NULL),(6,'Ciencia','2021-01-07 19:20:03',NULL,NULL),(7,'Programación','2021-01-07 19:20:03',NULL,NULL),(8,'Ciencia ficción','2021-01-07 19:20:04',NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `editorials`
--

DROP TABLE IF EXISTS `editorials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `editorials` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `editorials`
--

LOCK TABLES `editorials` WRITE;
/*!40000 ALTER TABLE `editorials` DISABLE KEYS */;
INSERT INTO `editorials` VALUES (1,'Ledesma','2021-01-09 15:04:30',NULL,NULL),(2,'Planeta','2021-01-09 15:04:30',NULL,NULL),(3,'Digital House','2021-01-09 15:04:30',NULL,NULL),(4,'Planeta Comic','2021-01-09 15:04:30',NULL,NULL);
/*!40000 ALTER TABLE `editorials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interests_user`
--

DROP TABLE IF EXISTS `interests_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interests_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `category_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `interests_user_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `interests_user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interests_user`
--

LOCK TABLES `interests_user` WRITE;
/*!40000 ALTER TABLE `interests_user` DISABLE KEYS */;
INSERT INTO `interests_user` VALUES (1,3,106,'2021-01-13 00:34:44','2021-01-13 00:34:44',NULL),(2,4,106,'2021-01-13 00:34:44','2021-01-13 00:34:44',NULL),(3,NULL,107,'2021-01-24 03:22:17','2021-01-24 03:22:17',NULL);
/*!40000 ALTER TABLE `interests_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `birth_date` datetime DEFAULT NULL,
  `adress` varchar(50) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (41,'Annalise','2020-01-23 13:19:26','1114 Anzinger Road','https://robohash.org/repudiandaevitaenemo.png?size','awiddocks0@angelfire.com','ajaspar0','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:58',NULL,NULL),(42,'Gusti','2020-02-11 09:57:07','674 Fordem Point','https://robohash.org/eaquenesciuntaccusantium.bmp?','glennie1@theguardian.com','glowres1','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:58',NULL,NULL),(43,'Uriel','2020-02-26 12:08:36','92 Maple Junction','https://robohash.org/velitautemtempora.bmp?size=50','unorrie2@ifeng.com','umoss2','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:58',NULL,NULL),(44,'Boony','2020-04-23 14:43:37','2030 Nova Junction','https://robohash.org/aututsit.jpg?size=50x50&set=s','bwoffenden3@cdc.gov','bwinward3','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:58',NULL,NULL),(45,'Cecile','2020-02-09 21:39:59','27 4th Junction','https://robohash.org/architectosedvoluptas.jpg?siz','crielly4@cocolog-nifty.com','cdoy4','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:58',NULL,NULL),(46,'Eldon','2020-10-04 19:35:50','24992 Marcy Terrace','https://robohash.org/utiurererum.jpg?size=50x50&se','edauney5@bbc.co.uk','ebraga5','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:59',NULL,NULL),(47,'Rosalinde','2020-08-16 16:09:15','95 Ramsey Circle','https://robohash.org/minusrepellatharum.bmp?size=5','rsagerson6@mashable.com','rtarplee6','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:59',NULL,NULL),(48,'Etta','2020-06-07 03:17:07','53131 Fairview Alley','https://robohash.org/rerumetlaboriosam.png?size=50','efraulo7@ezinearticles.com','ecescotti7','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:59',NULL,NULL),(49,'Candra','2020-03-25 02:46:50','65197 Bowman Point','https://robohash.org/optioestillum.jpg?size=50x50&','crowlatt8@amazon.de','cwardesworth8','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:59',NULL,NULL),(50,'Pammi','2020-05-20 13:15:53','2 Lunder Plaza','https://robohash.org/quiabeataefacere.png?size=50x','plamprecht9@seesaa.net','pvern9','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:59',NULL,NULL),(51,'Isadora','2020-04-11 01:30:23','7992 Schmedeman Parkway','https://robohash.org/velaccusantiumeum.png?size=50','imaccumeskeya@webmd.com','ichasteneya','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:59',NULL,NULL),(52,'Leeann','2020-08-22 01:24:25','6258 Moose Junction','https://robohash.org/quissapientecupiditate.bmp?si','lmuffenb@webeden.co.uk','lfareweatherb','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:59',NULL,NULL),(53,'Elnore','2020-05-13 08:11:58','7548 John Wall Parkway','https://robohash.org/eosaliquammodi.bmp?size=50x50','edunkinsonc@chron.com','eharryc','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:59',NULL,NULL),(54,'Kyle','2020-04-27 10:17:46','42 Lunder Pass','https://robohash.org/incumquedolor.jpg?size=50x50&','kchestermand@google.es','kgavigand','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:59',NULL,NULL),(55,'Chiquia','2020-03-24 15:50:30','6577 Hermina Park','https://robohash.org/sedetmolestiae.png?size=50x50','cmerrifielde@topsy.com','crodrigoe','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:59',NULL,NULL),(56,'Carlina','2020-06-16 06:19:09','642 American Ash Junction','https://robohash.org/estlaborumtenetur.jpg?size=50','cpridgeonf@prnewswire.com','ctattonf','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:59',NULL,NULL),(57,'Gunter','2020-11-19 18:36:54','41 Garrison Road','https://robohash.org/voluptasautquos.jpg?size=50x5','gbettesong@linkedin.com','gmcnaughtong','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:59',NULL,NULL),(58,'Renie','2020-08-08 10:16:48','6326 Briar Crest Road','https://robohash.org/nesciuntexpeditadoloremque.pn','rsteningh@mashable.com','ragutterh','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:59',NULL,NULL),(59,'Magnum','2020-08-31 11:15:33','102 Dottie Pass','https://robohash.org/etremeum.jpg?size=50x50&set=s','mlammiei@flavors.me','mmelanaphyi','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:59',NULL,NULL),(60,'Falito','2020-06-19 12:43:44','8 Eliot Way','https://robohash.org/explicabosuscipitipsa.png?siz','feltringhamj@ustream.tv','ftitcumbj','242a570d3ea0f1bed98a4f2736716f32f09ed049','2021-01-07 17:26:59',NULL,NULL),(63,'usuariox','2021-01-01 00:00:00','calle falsa 123','1610052988544-Sasuke_Uchiha_1_HD.png','usuariox123@email.com','usuario','$2a$05$SMhHL3SUvaNxE8TvyRj0fO3GEmxpwEKb06oi8I7me4ZWmpgnmCoEm','2021-01-07 20:56:28',NULL,NULL),(66,'',NULL,'',NULL,'','','','2021-01-07 21:03:32',NULL,NULL),(92,'funciona porfavor','2021-01-08 00:00:00','calle falsa 123','1610057493551-Sasuke_Uchiha_1_HD.png','hola@gmail.com','usuario111','$2a$05$GEWGMYcqfbbzRqnAPVKtXeXA0uAq1rka0JKgFL2fJ5J5KfHHqiGOS','2021-01-07 22:11:33',NULL,NULL),(104,'usuario ferliz ','2021-01-01 00:00:00','calle falsa 123','1610059558933-Sasuke_Uchiha_1_HD.png','peperaul123@email.com','usuario2','$2a$05$P2FQFvm5k8.TQUrbMBwPSuSoWmBC0rSXqyriEvSnayaiNy9z50S/6','2021-01-07 22:45:58',NULL,NULL),(105,'facundo romeu','2021-01-01 00:00:00','calle falsa 123','1610477190365-Sasuke_Uchiha_1_HD.png','facu@email.com','facu','$2a$05$nsXkmGFEITHzoQnnEAjJte0MPSJ7NNbbTSoCROjBO4IV20YJqgTL.','2021-01-12 18:46:30',NULL,NULL),(106,'aaaaa','2020-12-31 00:00:00','konoha 123','1610498084784-Sasuke_Uchiha_1_HD.png','holaa@email.com','12345678','$2a$05$AjldzOG4KxFxbzbXS/2A7.fUBEdEQkQ4QANxvVjZejJ1KmMi3dRYK','2021-01-13 00:34:44',NULL,NULL),(107,'naruto.','2002-10-01 00:00:00','calle falsa 1233','1611458537563-naruto.jpg','Narutoo.Uzumaki@email.com','narutito','$2a$05$kwTI22daNc8ftW5mlojOmuyY4tl3lZqZNApWm1/0ImoA/Dhqv1mkG','2021-01-24 03:22:17',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `writers`
--

DROP TABLE IF EXISTS `writers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `writers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `birth_date` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `writers`
--

LOCK TABLES `writers` WRITE;
/*!40000 ALTER TABLE `writers` DISABLE KEYS */;
INSERT INTO `writers` VALUES (1,'Charles Perrault','1628-01-12 00:00:00','2021-01-09 14:59:40',NULL,NULL),(2,'Ariel Rodriguez Palacios','1967-11-10 00:00:00','2021-01-09 14:59:41',NULL,NULL),(3,'Carl Sagan','1934-11-09 00:00:00','2021-01-09 14:59:41',NULL,NULL),(4,'Matt Thomas','1987-05-07 00:00:00','2021-01-09 14:59:41',NULL,NULL),(5,'George Lucas','1944-05-14 00:00:00','2021-01-09 14:59:41',NULL,NULL);
/*!40000 ALTER TABLE `writers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-09 16:52:03
