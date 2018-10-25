-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Course'
-- 
-- ---

DROP TABLE IF EXISTS `Course`;
		
CREATE TABLE `Course` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `title` VARCHAR(50) NULL DEFAULT NULL,
  `description` VARCHAR(150) NULL DEFAULT NULL,
  `tag` VARCHAR(13) NULL DEFAULT NULL,
  `avg_rating` DECIMAL(2, 1) NULL DEFAULT NULL,
  `total_ratings` INTEGER(5) NULL DEFAULT NULL,
  `enrollment` INTEGER(5) NULL DEFAULT NULL,
  `created_by` VARCHAR(25) NULL DEFAULT NULL,
  `last_updated` TIMESTAMP NULL DEFAULT NULL,
  `language` VARCHAR(15) NULL DEFAULT NULL,
  `img_url` VARCHAR(50) NULL DEFAULT NULL,
  `list_price` VARCHAR(7) NULL DEFAULT NULL,
  `discount_price` VARCHAR(7) NULL DEFAULT NULL,
  `video_hrs` DECIMAL(3, 1) NULL DEFAULT NULL,
  `total_articles` INTEGER(3) NULL DEFAULT NULL,
  `total_downloads` INTEGER(3) NULL DEFAULT NULL,
  `active_coupon` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'CC'
-- 
-- ---

DROP TABLE IF EXISTS `CC`;
		
CREATE TABLE `CC` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `option` VARCHAR(15) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Course_CC'
-- 
-- ---

DROP TABLE IF EXISTS `Course_CC`;
		
CREATE TABLE `Course_CC` (
  `course_id` INTEGER NULL DEFAULT NULL,
  `cc_id` INTEGER NULL DEFAULT NULL
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Course_CC` ADD FOREIGN KEY (course_id) REFERENCES `Course` (`id`);
ALTER TABLE `Course_CC` ADD FOREIGN KEY (cc_id) REFERENCES `CC` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Course` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `CC` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Course_CC` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Course` (`id`,`title`,`description`,`tag`,`avg_rating`,`total_ratings`,`enrollment`,`created_by`,`last_updated`,`language`,`img_url`,`list_price`,`discount_price`,`video_hrs`,`total_articles`,`total_downloads`,`active_coupon`) VALUES
-- ('','','','','','','','','','','','','','','','','');
-- INSERT INTO `CC` (`id`,`option`) VALUES
-- ('','');
-- INSERT INTO `Course_CC` (`course_id`,`cc_id`) VALUES
-- ('','');