-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 22, 2022 at 06:14 PM
-- Server version: 5.6.50
-- PHP Version: 7.4.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `help_desk_ticketing_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_title` varchar(255) NOT NULL,
  `category_description` text NOT NULL,
  `category_image` longblob,
  `category_image_filename` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_title`, `category_description`, `category_image`, `category_image_filename`) VALUES
(1, 'High Priority', 'High Priority', NULL, 'high.jpg'),
(2, 'Low Priority', 'Low Priority', NULL, 'low.jpg'),
(6, 'Information', 'Information', NULL, 'info.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comments_id` int(11) NOT NULL,
  `comments_user_id` varchar(255) NOT NULL,
  `comments_title` text NOT NULL,
  `comments_date` varchar(255) NOT NULL,
  `comments_description` text NOT NULL,
  `comments_ticket_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comments_id`, `comments_user_id`, `comments_title`, `comments_date`, `comments_description`, `comments_ticket_id`) VALUES
(1, '1', 'My First Comment', '2021-10-27', 'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser\r\n\r\n', '2'),
(2, '2', 'Multiply sea night grass fourth day sea lesser ', '2021-10-27', 'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser\r\n\r\n', '2'),
(3, '3', 'Multiply sea night grass fourth day sea lesser ', '2021-10-27', 'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser\r\n\r\n', '2'),
(4, '4', 'Multiply sea night grass fourth day sea lesser ', '2021-10-27', 'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser\r\n\r\n', '1'),
(5, '5', 'Multiply sea night grass fourth day sea lesser ', '2021-10-27', 'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser\r\n\r\n', '1'),
(6, '2', 'Multiply sea night grass fourth day sea lesser ', '2021-10-27', 'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser\r\n\r\n', '1'),
(7, '2', 'Multiply sea night grass fourth day sea lesser ', '2021-10-27', 'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser\r\n\r\n', '1'),
(139, '5', 'I have no intention of leaving India', '2021-10-27', 'Unperturbed by the stinging criticism from the BJP, and other Hindu groups over his remarks on the raging intolerance debate, actor Aamir Khan on Wednesday said he or his wife Kiran Rao had no intention of leaving India and his love for the country required no endorsements from anyone. ?First let me state categorically that neither', '1'),
(279, '5', 'Very good product', '2022-03-12', 'This is very good product', '1'),
(333, '5', 'Good Venue', '2022-06-02', 'This is a very good venue', '1'),
(334, '5', 'Best venue', '2022-06-02', 'One of the best venue', '7'),
(396, '5', 'asd', '2022-10-15', 'df', NULL),
(405, '5', 'asdf', '2022-11-19', 'adfssdf', NULL),
(406, '5', 'sdfgsdaf', '2022-11-19', 'sdfgdfgsfg', NULL),
(407, '5', 'asdf', '2022-11-20', 'asdf', '2'),
(413, '1001', 'Tesst', '2022-11-22', 'te', '412'),
(414, '1001', 'asdf', '2022-11-22', 'adsf', '412'),
(417, '5', 'asdf', '2022-11-22', 'asdf', '412'),
(418, '5', 'asdfsadf', '2022-11-22', 'asdf\nsadf\nas\ndf\nasd\nf', '412'),
(421, '1', 'Kindly expedite ', '2022-11-22', 'I need this software urgenntly ', '420');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `contact_subject` text NOT NULL,
  `contact_message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contact_id`, `contact_name`, `contact_email`, `contact_subject`, `contact_message`) VALUES
(142, 'Kaushal Kishore', 'kaushal@gmail.com', 'Need to Learn PHP', 'Hello Team, I need to learn PHP'),
(143, 'Amit Kumar', 'amit@gmail.com', 'Need to Learn C', 'Hello Team, I need to learn C Language'),
(146, 'Sumit Singh', 'sumit@gmail.com', 'Need to Learn Angular', 'Hello Team, I need to learn Angular');

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `country_id` int(11) NOT NULL,
  `country_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`country_id`, `country_name`) VALUES
(1, 'India'),
(2, 'USA');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `customer_level_id` varchar(255) NOT NULL DEFAULT '2',
  `customer_email` varchar(255) NOT NULL,
  `customer_password` varchar(255) NOT NULL,
  `customer_first_name` varchar(255) NOT NULL,
  `customer_last_name` varchar(255) NOT NULL,
  `customer_dob` varchar(255) NOT NULL,
  `customer_address` varchar(255) NOT NULL,
  `customer_city` varchar(255) NOT NULL,
  `customer_state` varchar(255) NOT NULL,
  `customer_country` varchar(255) NOT NULL,
  `customer_mobile` varchar(255) NOT NULL,
  `customer_nationalty` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_level_id`, `customer_email`, `customer_password`, `customer_first_name`, `customer_last_name`, `customer_dob`, `customer_address`, `customer_city`, `customer_state`, `customer_country`, `customer_mobile`, `customer_nationalty`) VALUES
(1, '2', 'amit@gmail.com', 'test', 'Aman', 'Kumar', '2021-10-15', 'gjhg', 'Mumbai', 'Maharastra', 'India', '9899786756', 'Indian'),
(2, '2', 'sumit@gmail.com', 'test', 'Pawan', 'Kumar', '2021-10-15', 'jhjk', 'Jaipur', 'Rajasthan', 'India', '9878765434', 'jb'),
(3, '2', 'rahul@gmail.com', 'test', 'Rahul', 'Kumar', '2021-10-08', 'jhg', 'Mumbai', 'Mahastra', 'India', '8987676567', 'g'),
(4, '2', 'sumit@gmail.com', 'test', 'Sumit', 'Kumar', '2021-10-16', 'jk', 'Delhi', 'Delhi', 'India', '7689876567', 'kh'),
(5, '1', 'admin@admin.com', 'test', 'Amit', 'Kumar', '2021-10-26', 'gg1', 'Kanpur', 'Uttar Pradesh', 'India', '9123321289', 'gg1');

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `faq_id` int(11) NOT NULL,
  `faq_question` text NOT NULL,
  `faq_answer` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faq`
--

INSERT INTO `faq` (`faq_id`, `faq_question`, `faq_answer`) VALUES
(1, 'Does MSU have wireless access? Where?', 'The central wireless network on campus, MSUnet, is now widely available across campus. More info on MSUnet, including links to system configuration pages and wireless access location info, can be found in the MSUnet FAQ as well as the MSUnet home page.\r\n'),
(2, 'I think the ethernet jack in my room is broken, what should I do?', 'First, call IT Services Support at (517) 432-6200 for assistance. Help Desk staff can diagnose many problems over the phone, but if it is determined that there is a problem with the connection jack in your room, a technician may be dispatched for repair. Additional information is available in the Ethernet Trouble Report help article.\r\n'),
(3, 'I need my computer fixed; what do I need to know before bringing it in?', 'The MSU Help and Repair Center, in room 120 Computer Center provides general computing help to the faculty, staff, and students of Michigan State University. Basic assistance (generally 15-20 minutes in length) is provided at no charge, on a first-come, first-served basis. Assistance with issues taking longer than 20 minutes to resolve, warranty repair work, or other issues we cannot work on, can usually be provided for a fee by the MSU Help and Repair Center.\r\n\r\n'),
(4, 'I\'m blocked from network access; what do I do now?', 'Use of your MSU NetID, the campus network, and your electronic mail account is a privilege, not a right. It is your responsibility to ensure that use of your NetID on the MSU network does not violate MSU\'s Statement of Acceptable Use. Unacceptable use of your NetID and its services (e-mail, dial-up and ethernet access, etc) may result in the suspension of your e-mail and/or network privileges.\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` int(11) NOT NULL,
  `feedback_name` varchar(255) NOT NULL,
  `feedback_email` varchar(255) NOT NULL,
  `feedback_message` text NOT NULL,
  `feedback_rating` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedback_id`, `feedback_name`, `feedback_email`, `feedback_message`, `feedback_rating`) VALUES
(1, 'Amit Singh', 'amit@gmail.com', 'Good Website', '5'),
(2, 'Sumit Singh', 'sumit@gmail.com', 'Best Website', '4'),
(3, 'Ranjeet Singh', 'ranjeet@gmail.com', 'Good contents for students', '5'),
(148, 'Aman', 'aman@gmail.com', 'Informative Website', '5');

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(422);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `login_id` bigint(20) NOT NULL,
  `login_email` varchar(255) DEFAULT NULL,
  `login_employee_id` varchar(255) DEFAULT NULL,
  `login_level_id` varchar(255) DEFAULT NULL,
  `login_password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` bigint(20) NOT NULL,
  `order_customer_id` varchar(255) DEFAULT NULL,
  `order_date` varchar(255) DEFAULT NULL,
  `order_from_date` varchar(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `order_to_date` varchar(255) DEFAULT NULL,
  `order_total` varchar(255) DEFAULT NULL,
  `order_total_days` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `roles_id` int(11) NOT NULL,
  `roles_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`roles_id`, `roles_name`) VALUES
(1, 'Admin'),
(2, 'Employee');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `state_id` int(11) NOT NULL,
  `state_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`state_id`, `state_name`) VALUES
(1, 'Maharastra'),
(2, 'Gujrat'),
(3, 'Bihar'),
(4, 'Uttar Pradesh'),
(5, 'Delhi'),
(6, 'Haryana');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `status_id` int(11) NOT NULL,
  `status_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`status_id`, `status_name`) VALUES
(1, 'Open'),
(2, 'Resolved'),
(3, 'In Progress'),
(5, 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `ticket_id` int(11) NOT NULL,
  `ticket_user_id` varchar(255) NOT NULL,
  `ticket_type_id` varchar(255) NOT NULL,
  `ticket_status_id` varchar(255) NOT NULL,
  `ticket_title` varchar(255) NOT NULL,
  `ticket_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`ticket_id`, `ticket_user_id`, `ticket_type_id`, `ticket_status_id`, `ticket_title`, `ticket_description`) VALUES
(2, '1', '1', '2', 'Need to change laptop', 'This is line 1.\r\nThis is line 2.\r\nThis is line 3.\r\nThis is line 4.\r\nThis is line 5.\r\n'),
(3, '2', '1', '1', 'Change the Mouse', 'Mouse is not working properly. Kindly change it.'),
(4, '3', '2', '2', 'Install Visual Studio Code', 'Kindly install photoshop on my system'),
(5, '4', '1', '1', 'Need a laptop', 'Kindly provide me a laptop'),
(6, '5', '2', '1', 'Desktop Sound is too slow', 'Desktop Sound is too slow'),
(7, '1', '1', '1', 'Replace keyboard', 'sdf'),
(8, '2', '1', '1', 'Need virtual machine', 'Test Ticket'),
(9, '3', '1', '1', 'Format my system', 'Test Ticket'),
(10, '4', '1', '1', 'Replace mouse', 'asdf'),
(11, '5', '1', '1', 'Need Photoshop Software', 'asdf'),
(412, '1', '6', '2', 'Need information about tax', 'Can you please share documents regarding tax deduction '),
(420, '1', '1', '2', 'I need Java Software', 'I need Java Software. \nThis is required for the project development ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comments_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`faq_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`login_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`roles_id`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`state_id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`status_id`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`ticket_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comments_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=422;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=416;

--
-- AUTO_INCREMENT for table `faq`
--
ALTER TABLE `faq`
  MODIFY `faq_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `roles_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `state_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `ticket_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=421;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
