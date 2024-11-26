-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: masterbread_inventarios
-- ------------------------------------------------------
-- Server version	8.4.0

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
-- Table structure for table `envios`
--

DROP TABLE IF EXISTS `envios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `envios` (
  `id_envios` int NOT NULL AUTO_INCREMENT,
  `id_pedido` int DEFAULT NULL,
  `direccion_envio` char(50) DEFAULT NULL,
  `fecha_envio` date DEFAULT NULL,
  `estado_envio` varchar(15) DEFAULT NULL,
  `comentarios` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_envios`),
  KEY `id_pedido` (`id_pedido`),
  CONSTRAINT `envios_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `envios`
--

LOCK TABLES `envios` WRITE;
/*!40000 ALTER TABLE `envios` DISABLE KEYS */;
INSERT INTO `envios` VALUES (1,1,'Calle Ficticia 123, Ciudad X','2023-11-15','Enviado','Entrega de Pan Integral. Pedido urgente.'),(2,2,'Avenida Siempre Viva 456, Ciudad Y','2023-11-18','Enviado','Entrega de Pan Blanco. Solicitan horario de entrega de mañana.'),(3,3,'Calle del Sol 789, Ciudad Z','2023-11-20','Pendiente','En espera de confirmación de pago para el Pan Multigrano.'),(4,4,'Calle Nueva 12, Ciudad X','2023-11-22','Enviado','Pedido de Pan de Centeno, cliente preferente.'),(5,5,'Calle Principal 100, Ciudad Y','2023-11-25','Enviado','Pan Brioche, envasado al vacío.'),(6,6,'Avenida del Mar 80, Ciudad Z','2023-11-26','Pendiente','Faltan ingredientes para preparar el Pan de Avena.'),(7,7,'Calle Secundaria 56, Ciudad X','2023-12-01','Enviado','Pan sin Gluten, entrega urgente.'),(8,8,'Calle de la Luna 32, Ciudad Y','2023-12-03','Pendiente','Esperando confirmación de dirección para el Pan de Molde.'),(9,9,'Calle del Bosque 15, Ciudad Z','2023-12-05','Enviado','Pan Artesanal, entrega especial para evento.'),(10,10,'Calle El Paraíso 22, Ciudad X','2023-12-07','Enviado','Entrega de Pan Ciabatta. Incluir receta especial como detalle.');
/*!40000 ALTER TABLE `envios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-22  8:46:34
