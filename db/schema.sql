DROP DATABASE IF EXISTS shiftyPiXels;
CREATE DATABASE shiftyPiXels;
USE shiftyPiXels;


CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    img_url VARCHAR(255) NOT NULL,
    public_id VARCHAR(255) NOT NULL,
    user_id INT,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    user_username VARCHAR(255),
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
    FOREIGN KEY (`user_username`) REFERENCES `Users` (`username`) ON DELETE SET NULL ON UPDATE CASCADE
)