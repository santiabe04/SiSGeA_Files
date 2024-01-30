CREATE DATABASE sisgea_files;

USE sisgea_files;

CREATE TABLE folders (
  folder_id INT PRIMARY KEY AUTO_INCREMENT,
  folder_name VARCHAR(255) NOT NULL,
  folder_branch INT NOT NULL,
  parent_folder INT,
  FOREIGN KEY (parent_folder) REFERENCES folders(folder_id) ON DELETE CASCADE
);

CREATE TABLE files (
  file_id INT PRIMARY KEY AUTO_INCREMENT,
  file_name VARCHAR(255) NOT NULL,
  file_content LONGBLOB NOT NULL,
  file_type VARCHAR(10) NOT NULL,
  file_branch INT NOT NULL,
  parent_folder INT,
  FOREIGN KEY (parent_folder) REFERENCES folders(folder_id) ON DELETE CASCADE
);