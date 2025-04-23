const livros = [
    {
        "genero": "Tecnologia da Informação",
        "books": [
            {
                "id": 1,
                "title": "Learn Enough JavaScript to Be Dangerous",
                "subtitle": "Write Programs, Publish Packages, and Develop Interactive Websites with JavaScript",
                "isbn13": "9780137843749",
                "price": "$31.98",
                "image": "https://itbook.store/img/books/9780137843749.png",
                "url": "https://itbook.store/books/9780137843749"
            },
            {
                "id": 2,
                "title": "Effective JavaScript",
                "subtitle": "68 Specific Ways to Harness the Power of JavaScript",
                "isbn13": "9780321812186",
                "price": "$21.99",
                "image": "https://itbook.store/img/books/9780321812186.png",
                "url": "https://itbook.store/books/9780321812186"
            },
            {
                "id": 3,
                "title": "Learning JavaScript",
                "subtitle": "A Hands-On Guide to the Fundamentals of Modern JavaScript",
                "isbn13": "9780321832740",
                "price": "$8.99",
                "image": "https://itbook.store/img/books/9780321832740.png",
                "url": "https://itbook.store/books/9780321832740"
            },
            {
                "id": 4,
                "title": "Java Cookbook, 2nd Edition",
                "subtitle": "Solutions and Examples for Java Developers",
                "isbn13": "9780596007010",
                "price": "$3.89",
                "image": "https://itbook.store/img/books/9780596007010.png",
                "url": "https://itbook.store/books/9780596007010"
            },
            {
                "id": 5,
                "title": "JavaScript: The Good Parts",
                "subtitle": "Unearthing the Excellence in JavaScript",
                "isbn13": "9780596517748",
                "price": "$15.99",
                "image": "https://itbook.store/img/books/9780596517748.png",
                "url": "https://itbook.store/books/9780596517748"
            },
            {
                "id": 6,
                "title": "Head First JavaScript",
                "subtitle": "A Learner's Companion to JavaScript",
                "isbn13": "9780596527747",
                "price": "$7.72",
                "image": "https://itbook.store/img/books/9780596527747.png",
                "url": "https://itbook.store/books/9780596527747"
            },
            {
                "id": 7,
                "title": "Sams Teach Yourself Java in 24 Hours, 6th Edition",
                "subtitle": "Covering Java 7 and Android",
                "isbn13": "9780672335754",
                "price": "$5.71",
                "image": "https://itbook.store/img/books/9780672335754.png",
                "url": "https://itbook.store/books/9780672335754"
            },
            {
                "id": 8,
                "title": "Sams Teach Yourself Java in 24 Hours, 8th Edition",
                "subtitle": "Covering Java 9",
                "isbn13": "9780672337949",
                "price": "$17.79",
                "image": "https://itbook.store/img/books/9780672337949.png",
                "url": "https://itbook.store/books/9780672337949"
            },
            {
                "id": 9,
                "title": "Pro Java ME Apps",
                "subtitle": "Building Commercial Quality Java ME Apps",
                "isbn13": "9781430233275",
                "price": "$36.22",
                "image": "https://itbook.store/img/books/9781430233275.png",
                "url": "https://itbook.store/books/9781430233275"
            },
            {
                "id": 10,
                "title": "Expert Oracle and Java Security",
                "subtitle": "Programming Secure Oracle Database Applications With Java",
                "isbn13": "9781430238317",
                "price": "$46.78",
                "image": "https://itbook.store/img/books/9781430238317.png",
                "url": "https://itbook.store/books/9781430238317"
            },
            {
                "id": 11,
                "title": "JavaScript Creativity",
                "subtitle": "Exploring the Modern Capabilities of JavaScript and HTML5",
                "isbn13": "9781430259442",
                "price": "$30.64",
                "image": "https://itbook.store/img/books/9781430259442.png",
                "url": "https://itbook.store/books/9781430259442"
            },
            {
                "id": 12,
                "title": "Learn Java for Web Development",
                "subtitle": "Modern Java Web Development",
                "isbn13": "9781430259831",
                "price": "$41.39",
                "image": "https://itbook.store/img/books/9781430259831.png",
                "url": "https://itbook.store/books/9781430259831"
            },
            {
                "id": 13,
                "title": "Pro JavaFX 8",
                "subtitle": "A Definitive Guide to Building Desktop, Mobile, and Embedded Java Clients",
                "isbn13": "9781430265740",
                "price": "$49.99",
                "image": "https://itbook.store/img/books/9781430265740.png",
                "url": "https://itbook.store/books/9781430265740"
            },
            {
                "id": 14,
                "title": "Beginning Java 8 APIs, Extensions and Libraries",
                "subtitle": "Swing, JavaFX, JavaScript, JDBC and Network Programming APIs",
                "isbn13": "9781430266617",
                "price": "$59.99",
                "image": "https://itbook.store/img/books/9781430266617.png",
                "url": "https://itbook.store/books/9781430266617"
            },
            {
                "id": 15,
                "title": "Pro JavaFX 2",
                "subtitle": "A Definitive Guide to Rich Clients with Java Technology",
                "isbn13": "9781430268727",
                "price": "$36.57",
                "image": "https://itbook.store/img/books/9781430268727.png",
                "url": "https://itbook.store/books/9781430268727"
            },
            {
                "id": 16,
                "title": "An Introduction to Network Programming with Java, 3rd Edition",
                "subtitle": "Java 7 Compatible",
                "isbn13": "9781447152538",
                "price": "$54.99",
                "image": "https://itbook.store/img/books/9781447152538.png",
                "url": "https://itbook.store/books/9781447152538"
            },
            {
                "id": 17,
                "title": "JavaScript for PHP Developers",
                "subtitle": "A Concise Guide to Mastering JavaScript",
                "isbn13": "9781449320195",
                "price": "$10.50",
                "image": "https://itbook.store/img/books/9781449320195.png",
                "url": "https://itbook.store/books/9781449320195"
            },
            {
                "id": 18,
                "title": "Learning JavaScript Design Patterns",
                "subtitle": "A JavaScript and jQuery Developer's Guide",
                "isbn13": "9781449331818",
                "price": "$23.49",
                "image": "https://itbook.store/img/books/9781449331818.png",
                "url": "https://itbook.store/books/9781449331818"
            },
            {
                "id": 19,
                "title": "Java EE 6 Pocket Guide",
                "subtitle": "A Quick Reference for Simplified Enterprise Java Development",
                "isbn13": "9781449336684",
                "price": "$3.66",
                "image": "https://itbook.store/img/books/9781449336684.png",
                "url": "https://itbook.store/books/9781449336684"
            },
            {
                "id": 20,
                "title": "The Problem with Native JavaScript APIs",
                "subtitle": "Why reliance on native JavaScript APIs leads to disadvantages",
                "isbn13": "9781449339951",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/9781449339951.png",
                "url": "https://itbook.store/books/9781449339951"
            },
            {
                "id": 21,
                "title": "JavaScript Enlightenment",
                "subtitle": "From Library User to JavaScript Developer",
                "isbn13": "9781449342883",
                "price": "$9.93",
                "image": "https://itbook.store/img/books/9781449342883.png",
                "url": "https://itbook.store/books/9781449342883"
            },
            {
                "id": 22,
                "title": "Java 7 Pocket Guide, 2nd Edition",
                "subtitle": "Instant Help for Java Programmers",
                "isbn13": "9781449343569",
                "price": "$11.99",
                "image": "https://itbook.store/img/books/9781449343569.png",
                "url": "https://itbook.store/books/9781449343569"
            },
            {
                "id": 23,
                "title": "JavaScript Testing with Jasmine",
                "subtitle": "JavaScript Behavior-Driven Development",
                "isbn13": "9781449356378",
                "price": "$9.22",
                "image": "https://itbook.store/img/books/9781449356378.png",
                "url": "https://itbook.store/books/9781449356378"
            },
            {
                "id": 24,
                "title": "JavaMail API",
                "subtitle": "Sending and Receiving Email with Java",
                "isbn13": "9781449367244",
                "price": "$3.67",
                "image": "https://itbook.store/img/books/9781449367244.png",
                "url": "https://itbook.store/books/9781449367244"
            },
            {
                "id": 25,
                "title": "Scripting in Java",
                "subtitle": "Integrating with Groovy and JavaScript",
                "isbn13": "9781484207147",
                "price": "$44.99",
                "image": "https://itbook.store/img/books/9781484207147.png",
                "url": "https://itbook.store/books/9781484207147"
            },
            {
                "id": 26,
                "title": "Learn JavaFX 8",
                "subtitle": "Building User Experience and Interfaces with Java 8",
                "isbn13": "9781484211434",
                "price": "$57.95",
                "image": "https://itbook.store/img/books/9781484211434.png",
                "url": "https://itbook.store/books/9781484211434"
            },
            {
                "id": 27,
                "title": "Java Design Patterns",
                "subtitle": "A tour of 23 gang of four design patterns in Java",
                "isbn13": "9781484218013",
                "price": "$30.79",
                "image": "https://itbook.store/img/books/9781484218013.png",
                "url": "https://itbook.store/books/9781484218013"
            },
            {
                "id": 28,
                "title": "Practical JSF in Java EE 8",
                "subtitle": "Web Applications ​in Java for the Enterprise",
                "isbn13": "9781484230299",
                "price": "$39.99",
                "image": "https://itbook.store/img/books/9781484230299.png",
                "url": "https://itbook.store/books/9781484230299"
            },
            {
                "id": 29,
                "title": "Pro JavaFX 9",
                "subtitle": "A Definitive Guide to Building Desktop, Mobile, and Embedded Java Clients",
                "isbn13": "9781484230411",
                "price": "$31.20",
                "image": "https://itbook.store/img/books/9781484230411.png",
                "url": "https://itbook.store/books/9781484230411"
            },
            {
                "id": 30,
                "title": "Exploring Java 9",
                "subtitle": "Build Modularized Applications in Java",
                "isbn13": "9781484233290",
                "price": "$17.49",
                "image": "https://itbook.store/img/books/9781484233290.png",
                "url": "https://itbook.store/books/9781484233290"
            },
            {
                "id": 31,
                "title": "Object-Oriented Programming with PHP5",
                "subtitle": "Learn to leverage PHP5's OOP features to write manageable applications with ease",
                "isbn13": "9781847192561",
                "price": "$3.73",
                "image": "https://itbook.store/img/books/9781847192561.png",
                "url": "https://itbook.store/books/9781847192561"
            },
            {
                "id": 32,
                "title": "AJAX and PHP, 2nd Edition",
                "subtitle": "Build user friendly Web 2.0 Applications with JavaScript and PHP",
                "isbn13": "9781847197726",
                "price": "$23.99",
                "image": "https://itbook.store/img/books/9781847197726.png",
                "url": "https://itbook.store/books/9781847197726"
            },
            {
                "id": 33,
                "title": "PHP 5 E-commerce Development",
                "subtitle": "Create a flexible framework in PHP for a powerful e-commerce solution",
                "isbn13": "9781847199645",
                "price": "$23.99",
                "image": "https://itbook.store/img/books/9781847199645.png",
                "url": "https://itbook.store/books/9781847199645"
            },
            {
                "id": 34,
                "title": "Mastering phpMyAdmin 3.3.x for Effective MySQL Management",
                "subtitle": "A complete guide to get started with phpMyAdmin 3.3 and master its features",
                "isbn13": "9781849513548",
                "price": "$23.99",
                "image": "https://itbook.store/img/books/9781849513548.png",
                "url": "https://itbook.store/books/9781849513548"
            },
            {
                "id": 35,
                "title": "Mastering phpMyAdmin 3.4 for Effective MySQL Management",
                "subtitle": "A complete guide to getting started with phpMyAdmin 3.4 and mastering its features",
                "isbn13": "9781849517782",
                "price": "$23.99",
                "image": "https://itbook.store/img/books/9781849517782.png",
                "url": "https://itbook.store/books/9781849517782"
            },
            {
                "id": 36,
                "title": "PHP Succinctly",
                "subtitle": "",
                "isbn13": "1001649072951",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/1001649072951.png",
                "url": "https://itbook.store/books/1001649072951"
            },
            {
                "id": 37,
                "title": "PHP Notes for Professionals",
                "subtitle": "",
                "isbn13": "1001655302238",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/1001655302238.png",
                "url": "https://itbook.store/books/1001655302238"
            },
            {
                "id": 38,
                "title": "PHPUnit Manual",
                "subtitle": "",
                "isbn13": "1001655897045",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/1001655897045.png",
                "url": "https://itbook.store/books/1001655897045"
            },
            {
                "id": 39,
                "title": "PHP and MySQL For Dummies, 3rd Edition",
                "subtitle": "",
                "isbn13": "9780470096000",
                "price": "$12.00",
                "image": "https://itbook.store/img/books/9780470096000.png",
                "url": "https://itbook.store/books/9780470096000"
            },
            {
                "id": 40,
                "title": "PHP & MySQL Web Development All-in-One Desk Reference For Dummies",
                "subtitle": "",
                "isbn13": "9780470167779",
                "price": "$12.99",
                "image": "https://itbook.store/img/books/9780470167779.png",
                "url": "https://itbook.store/books/9780470167779"
            },
            {
                "id": 41,
                "title": "PHP CLI",
                "subtitle": "Create Command Line Interface Scripts with PHP",
                "isbn13": "9781484222379",
                "price": "$22.99",
                "image": "https://itbook.store/img/books/9781484222379.png",
                "url": "https://itbook.store/books/9781484222379"
            },
            {
                "id": 42,
                "title": "PHP 7 Zend Certification Study Guide",
                "subtitle": "Ace the ZCE 2017-PHP Exam",
                "isbn13": "9781484232453",
                "price": "$26.32",
                "image": "https://itbook.store/img/books/9781484232453.png",
                "url": "https://itbook.store/books/9781484232453"
            },
            {
                "id": 43,
                "title": "PHP Web Scraping",
                "subtitle": "Get up and running with the basic techniques of web scraping using PHP",
                "isbn13": "9781782164760",
                "price": "$12.99",
                "image": "https://itbook.store/img/books/9781782164760.png",
                "url": "https://itbook.store/books/9781782164760"
            },
            {
                "id": 44,
                "title": "Instant Simple Botting with PHP",
                "subtitle": "Enhance your botting skills and create your own web bots with PHP",
                "isbn13": "9781782169291",
                "price": "$14.99",
                "image": "https://itbook.store/img/books/9781782169291.png",
                "url": "https://itbook.store/books/9781782169291"
            },
            {
                "id": 45,
                "title": "PhpStorm Cookbook",
                "subtitle": "Discover over 80 recipes to learn how to build and test PHP applications efficiently using the PhpStorm IDE",
                "isbn13": "9781782173878",
                "price": "$35.48",
                "image": "https://itbook.store/img/books/9781782173878.png",
                "url": "https://itbook.store/books/9781782173878"
            },
            {
                "id": 46,
                "title": "PHPUnit Essentials",
                "subtitle": "Get started with PHPUnit and learn how to write and test code using advanced technologies",
                "isbn13": "9781783283439",
                "price": "$26.99",
                "image": "https://itbook.store/img/books/9781783283439.png",
                "url": "https://itbook.store/books/9781783283439"
            },
            {
                "id": 47,
                "title": "Web Application Development with Yii 2 and PHP",
                "subtitle": "Fast-track your web application development using the new generation Yii PHP framework",
                "isbn13": "9781783981885",
                "price": "$29.46",
                "image": "https://itbook.store/img/books/9781783981885.png",
                "url": "https://itbook.store/books/9781783981885"
            },
            {
                "id": 48,
                "title": "Beginning PHP",
                "subtitle": "Master the Latest Features of PHP 7 and Fully Embrace Modern PHP Development",
                "isbn13": "9781789535907",
                "price": "$24.99",
                "image": "https://itbook.store/img/books/9781789535907.png",
                "url": "https://itbook.store/books/9781789535907"
            },
            {
                "id": 49,
                "title": "The PHP Workshop",
                "subtitle": "A New, Interactive Approach to Learning PHP",
                "isbn13": "9781838648916",
                "price": "$27.44",
                "image": "https://itbook.store/img/books/9781838648916.png",
                "url": "https://itbook.store/books/9781838648916"
            },
            {
                "id": 50,
                "title": "CodeIgniter for Rapid PHP Application Development",
                "subtitle": "Improve your PHP coding productivity with the free compact open-source MVC CodeIgniter framework!",
                "isbn13": "9781847191748",
                "price": "$20.99",
                "image": "https://itbook.store/img/books/9781847191748.png",
                "url": "https://itbook.store/books/9781847191748"
            },
            {
                "id": 51,
                "title": "PHP: The Right Way",
                "subtitle": "Your guide to PHP best practices, coding standards, and authoritative tutorials",
                "isbn13": "1001635859424",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/1001635859424.png",
                "url": "https://itbook.store/books/1001635859424"
            },
            {
                "id": 52,
                "title": "Plug-In PHP: 100 Power Solutions",
                "subtitle": "Simple Solutions to Practical PHP Problems",
                "isbn13": "9780071666596",
                "price": "$4.98",
                "image": "https://itbook.store/img/books/9780071666596.png",
                "url": "https://itbook.store/books/9780071666596"
            },
            {
                "id": 53,
                "title": "PHP: The Good Parts",
                "subtitle": "Delivering the Best of PHP",
                "isbn13": "9780596804374",
                "price": "$10.00",
                "image": "https://itbook.store/img/books/9780596804374.png",
                "url": "https://itbook.store/books/9780596804374"
            },
            {
                "id": 54,
                "title": "The PHP Anthology, Volume 2",
                "subtitle": "Object Oriented PHP Solutions",
                "isbn13": "9780957921849",
                "price": "$3.98",
                "image": "https://itbook.store/img/books/9780957921849.png",
                "url": "https://itbook.store/books/9780957921849"
            },
            {
                "id": 55,
                "title": "The PHP Anthology, Volume 1",
                "subtitle": "Object Oriented PHP Solutions",
                "isbn13": "9780957921856",
                "price": "$3.01",
                "image": "https://itbook.store/img/books/9780957921856.png",
                "url": "https://itbook.store/books/9780957921856"
            },
            {
                "id": 56,
                "title": "Jump Start PHP",
                "subtitle": "Get up to speed with PHP in a weekend",
                "isbn13": "9780987467409",
                "price": "$14.53",
                "image": "https://itbook.store/img/books/9780987467409.png",
                "url": "https://itbook.store/books/9780987467409"
            },
            {
                "id": 57,
                "title": "Pro PHP Application Performance",
                "subtitle": "Tuning PHP Web Projects for Maximum Performance",
                "isbn13": "9781430228981",
                "price": "$32.94",
                "image": "https://itbook.store/img/books/9781430228981.png",
                "url": "https://itbook.store/books/9781430228981"
            },
            {
                "id": 58,
                "title": "Node.js for PHP Developers",
                "subtitle": "Porting PHP to Node.js",
                "isbn13": "9781449333607",
                "price": "$20.36",
                "image": "https://itbook.store/img/books/9781449333607.png",
                "url": "https://itbook.store/books/9781449333607"
            },
            {
                "id": 59,
                "title": "PHP Cookbook, 3rd Edition",
                "subtitle": "Solutions & Examples for PHP Programmers",
                "isbn13": "9781449363758",
                "price": "$35.52",
                "image": "https://itbook.store/img/books/9781449363758.png",
                "url": "https://itbook.store/books/9781449363758"
            },
            {
                "id": 60,
                "title": "Pro PHP and jQuery, 2nd Edition",
                "subtitle": "Take your dynamic PHP 7 apps to the next level by adding a JavaScript layer using jQuery",
                "isbn13": "9781484212318",
                "price": "$41.09",
                "image": "https://itbook.store/img/books/9781484212318.png",
                "url": "https://itbook.store/books/9781484212318"
            },
            {
                "id": 61,
                "title": "SQL Queries for Mere Mortals, 4th Edition",
                "subtitle": "A Hands-On Guide to Data Manipulation in SQL",
                "isbn13": "9780134858333",
                "price": "$18.13",
                "image": "https://itbook.store/img/books/9780134858333.png",
                "url": "https://itbook.store/books/9780134858333"
            },
            {
                "id": 62,
                "title": "A Developer's Guide to Data Modeling for SQL Server",
                "subtitle": "Covering SQL Server 2005 and 2008",
                "isbn13": "9780321497642",
                "price": "$6.15",
                "image": "https://itbook.store/img/books/9780321497642.png",
                "url": "https://itbook.store/books/9780321497642"
            },
            {
                "id": 63,
                "title": "Oracle PL/SQL Language Pocket Reference, 4th Edition",
                "subtitle": "A Guide to Oracle's PL/SQL Language Fundamentals",
                "isbn13": "9780596514044",
                "price": "$5.98",
                "image": "https://itbook.store/img/books/9780596514044.png",
                "url": "https://itbook.store/books/9780596514044"
            },
            {
                "id": 64,
                "title": "Learning SQL, 2nd Edition",
                "subtitle": "Master SQL Fundamentals",
                "isbn13": "9780596520830",
                "price": "$14.50",
                "image": "https://itbook.store/img/books/9780596520830.png",
                "url": "https://itbook.store/books/9780596520830"
            },
            {
                "id": 65,
                "title": "SQL and Relational Theory",
                "subtitle": "How to Write Accurate SQL Code",
                "isbn13": "9780596523060",
                "price": "$3.50",
                "image": "https://itbook.store/img/books/9780596523060.png",
                "url": "https://itbook.store/books/9780596523060"
            },
            {
                "id": 66,
                "title": "Head First SQL",
                "subtitle": "Your Brain on SQL - A Learner's Guide",
                "isbn13": "9780596526849",
                "price": "$11.09",
                "image": "https://itbook.store/img/books/9780596526849.png",
                "url": "https://itbook.store/books/9780596526849"
            },
            {
                "id": 67,
                "title": "Beginning SQL Server Modeling",
                "subtitle": "Model-Driven Application Development in SQL Server 2008",
                "isbn13": "9781430227519",
                "price": "$17.99",
                "image": "https://itbook.store/img/books/9781430227519.png",
                "url": "https://itbook.store/books/9781430227519"
            },
            {
                "id": 68,
                "title": "Pro SQL Database for Windows Azure, 2nd Edition",
                "subtitle": "SQL Server in the Cloud",
                "isbn13": "9781430243953",
                "price": "$49.99",
                "image": "https://itbook.store/img/books/9781430243953.png",
                "url": "https://itbook.store/books/9781430243953"
            },
            {
                "id": 69,
                "title": "Healthy SQL",
                "subtitle": "A Comprehensive Guide to Healthy SQL Server Performance",
                "isbn13": "9781430267737",
                "price": "$42.95",
                "image": "https://itbook.store/img/books/9781430267737.png",
                "url": "https://itbook.store/books/9781430267737"
            },
            {
                "id": 70,
                "title": "SQL and Relational Theory, 2nd Edition",
                "subtitle": "How to Write Accurate SQL Code",
                "isbn13": "9781449316402",
                "price": "$16.10",
                "image": "https://itbook.store/img/books/9781449316402.png",
                "url": "https://itbook.store/books/9781449316402"
            },
            {
                "id": 71,
                "title": "SQL Pocket Guide, 3rd Edition",
                "subtitle": "A Guide to SQL Usage",
                "isbn13": "9781449394097",
                "price": "$6.47",
                "image": "https://itbook.store/img/books/9781449394097.png",
                "url": "https://itbook.store/books/9781449394097"
            },
            {
                "id": 72,
                "title": "SQL Primer",
                "subtitle": "An Accelerated Introduction to SQL Basics",
                "isbn13": "9781484235751",
                "price": "$29.99",
                "image": "https://itbook.store/img/books/9781484235751.png",
                "url": "https://itbook.store/books/9781484235751"
            },
            {
                "id": 73,
                "title": "Expert SQL Server Transactions and Locking",
                "subtitle": "Concurrency Internals for SQL Server Practitioners",
                "isbn13": "9781484239568",
                "price": "$24.23",
                "image": "https://itbook.store/img/books/9781484239568.png",
                "url": "https://itbook.store/books/9781484239568"
            },
            {
                "id": 74,
                "title": "Dynamic SQL, 2nd Edition",
                "subtitle": "Applications, Performance, and Security in Microsoft SQL Server",
                "isbn13": "9781484243176",
                "price": "$30.40",
                "image": "https://itbook.store/img/books/9781484243176.png",
                "url": "https://itbook.store/books/9781484243176"
            },
            {
                "id": 75,
                "title": "Refactoring Legacy T-SQL for Improved Performance",
                "subtitle": "Modern Practices for SQL Server Applications",
                "isbn13": "9781484255803",
                "price": "$23.99",
                "image": "https://itbook.store/img/books/9781484255803.png",
                "url": "https://itbook.store/books/9781484255803"
            },
            {
                "id": 76,
                "title": "Pro T-SQL 2019",
                "subtitle": "Toward Speed, Scalability, and Standardization for SQL Server Developers",
                "isbn13": "9781484255896",
                "price": "$24.62",
                "image": "https://itbook.store/img/books/9781484255896.png",
                "url": "https://itbook.store/books/9781484255896"
            },
            {
                "id": 77,
                "title": "SQL Server Data Automation Through Frameworks",
                "subtitle": "Building Metadata-Driven Frameworks with T-SQL, SSIS, and Azure Data Factory",
                "isbn13": "9781484262122",
                "price": "$31.40",
                "image": "https://itbook.store/img/books/9781484262122.png",
                "url": "https://itbook.store/books/9781484262122"
            },
            {
                "id": 78,
                "title": "Building Custom Tasks for SQL Server Integration Services, 2nd Edition",
                "subtitle": "The Power of .NET for ETL for SQL Server 2019 and Beyond",
                "isbn13": "9781484264812",
                "price": "$34.99",
                "image": "https://itbook.store/img/books/9781484264812.png",
                "url": "https://itbook.store/books/9781484264812"
            },
            {
                "id": 79,
                "title": "Oracle PL/SQL Language Pocket Reference, 5th Edition",
                "subtitle": "A Guide to Oracle's PL/SQL Language Fundamentals",
                "isbn13": "9781491920008",
                "price": "$12.49",
                "image": "https://itbook.store/img/books/9781491920008.png",
                "url": "https://itbook.store/books/9781491920008"
            },
            {
                "id": 80,
                "title": "SQL and Relational Theory, 3rd Edition",
                "subtitle": "How to Write Accurate SQL Code",
                "isbn13": "9781491941171",
                "price": "$26.99",
                "image": "https://itbook.store/img/books/9781491941171.png",
                "url": "https://itbook.store/books/9781491941171"
            },
            {
                "id": 81,
                "title": "SQL Cookbook, 2nd Edition",
                "subtitle": "Query Solutions and Techniques for All SQL Users",
                "isbn13": "9781492077442",
                "price": "$44.41",
                "image": "https://itbook.store/img/books/9781492077442.png",
                "url": "https://itbook.store/books/9781492077442"
            },
            {
                "id": 82,
                "title": "SQL Pocket Guide, 4th Edition",
                "subtitle": "A Guide to SQL Usage",
                "isbn13": "9781492090403",
                "price": "$25.99",
                "image": "https://itbook.store/img/books/9781492090403.png",
                "url": "https://itbook.store/books/9781492090403"
            },
            {
                "id": 83,
                "title": "Getting Started with SQL Server 2014 Administration",
                "subtitle": "Optimize your database server to be fast, efficient, and highly secure using the brand new features of SQL Server 2014",
                "isbn13": "9781782172413",
                "price": "$16.99",
                "image": "https://itbook.store/img/books/9781782172413.png",
                "url": "https://itbook.store/books/9781782172413"
            },
            {
                "id": 84,
                "title": "SQL Server 2014 Development Essentials",
                "subtitle": "Design, implement, and deliver a successful database solution with Microsoft SQL Server 2014",
                "isbn13": "9781782172550",
                "price": "$26.99",
                "image": "https://itbook.store/img/books/9781782172550.png",
                "url": "https://itbook.store/books/9781782172550"
            },
            {
                "id": 85,
                "title": "Microsoft SQL Server 2012 with Hadoop",
                "subtitle": "Integrate data between Apache Hadoop and SQL Server 2012 and provide business intelligence on the heterogeneous data",
                "isbn13": "9781782177982",
                "price": "$23.99",
                "image": "https://itbook.store/img/books/9781782177982.png",
                "url": "https://itbook.store/books/9781782177982"
            },
            {
                "id": 86,
                "title": "Data Science with SQL Server Quick Start Guide",
                "subtitle": "Integrate SQL Server with data science",
                "isbn13": "9781789537123",
                "price": "$34.99",
                "image": "https://itbook.store/img/books/9781789537123.png",
                "url": "https://itbook.store/books/9781789537123"
            },
            {
                "id": 87,
                "title": "Professional Azure SQL Database Administration",
                "subtitle": "Equip Yourself with the Skills You Need to Manage and Maintain Your SQL Databases on the Microsoft Cloud",
                "isbn13": "9781789538854",
                "price": "$49.99",
                "image": "https://itbook.store/img/books/9781789538854.png",
                "url": "https://itbook.store/books/9781789538854"
            },
            {
                "id": 88,
                "title": "Microsoft SQL Azure: Enterprise Application Development",
                "subtitle": "Build enterprise-ready applications and projects with SQL Azure",
                "isbn13": "9781849680806",
                "price": "$29.99",
                "image": "https://itbook.store/img/books/9781849680806.png",
                "url": "https://itbook.store/books/9781849680806"
            },
            {
                "id": 89,
                "title": "Microsoft SQL Server 2008 High Availability",
                "subtitle": "Minimize downtime, speed up recovery, and achieve the highest level of availability and reliability for SQL server applications by mastering the concepts of database mirroring, log shipping, clusterin",
                "isbn13": "9781849681223",
                "price": "$29.99",
                "image": "https://itbook.store/img/books/9781849681223.png",
                "url": "https://itbook.store/books/9781849681223"
            },
            {
                "id": 90,
                "title": "Microsoft SQL Server 2008 R2 Administration Cookbook",
                "subtitle": "Over 70 practical recipes for administering a high-performance SQL Server 2008 R2 system",
                "isbn13": "9781849681445",
                "price": "$32.99",
                "image": "https://itbook.store/img/books/9781849681445.png",
                "url": "https://itbook.store/books/9781849681445"
            },
            {
                "id": 91,
                "title": "C# Database Basics",
                "subtitle": "Moving from Visual Basic and VBA to C#",
                "isbn13": "9781449309985",
                "price": "$16.99",
                "image": "https://itbook.store/img/books/9781449309985.png",
                "url": "https://itbook.store/books/9781449309985"
            },
            {
                "id": 92,
                "title": "Beginning ASP.NET 4 in C# and VB",
                "subtitle": "",
                "isbn13": "9781457103933",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/9781457103933.png",
                "url": "https://itbook.store/books/9781457103933"
            },
            {
                "id": 93,
                "title": "Going GAS",
                "subtitle": "From VBA to Google Apps Script",
                "isbn13": "9781491940464",
                "price": "$16.79",
                "image": "https://itbook.store/img/books/9781491940464.png",
                "url": "https://itbook.store/books/9781491940464"
            },
            {
                "id": 94,
                "title": "VB & VBA in a Nutshell: The Language",
                "subtitle": "",
                "isbn13": "9781565923584",
                "price": "$4.19",
                "image": "https://itbook.store/img/books/9781565923584.png",
                "url": "https://itbook.store/books/9781565923584"
            },
            {
                "id": 95,
                "title": "Beginning .NET Game Programming in VB .NET",
                "subtitle": "",
                "isbn13": "9781590594018",
                "price": "$27.15",
                "image": "https://itbook.store/img/books/9781590594018.png",
                "url": "https://itbook.store/books/9781590594018"
            },
            {
                "id": 96,
                "title": "Microsoft SharePoint",
                "subtitle": "Building Office 2007 Solutions in VB 2005",
                "isbn13": "9781590598139",
                "price": "$30.36",
                "image": "https://itbook.store/img/books/9781590598139.png",
                "url": "https://itbook.store/books/9781590598139"
            },
            {
                "id": 97,
                "title": "Beginning VB 2008",
                "subtitle": "From Novice to Professional",
                "isbn13": "9781590599389",
                "price": "$4.99",
                "image": "https://itbook.store/img/books/9781590599389.png",
                "url": "https://itbook.store/books/9781590599389"
            },
            {
                "id": 98,
                "title": "Pro Excel 2007 VBA",
                "subtitle": "",
                "isbn13": "9781590599570",
                "price": "$29.99",
                "image": "https://itbook.store/img/books/9781590599570.png",
                "url": "https://itbook.store/books/9781590599570"
            },
            {
                "id": 99,
                "title": "The Book of Visual Basic 2005",
                "subtitle": ".NET Insight for Classic VB Developers",
                "isbn13": "9781593270742",
                "price": "$3.46",
                "image": "https://itbook.store/img/books/9781593270742.png",
                "url": "https://itbook.store/books/9781593270742"
            },
            {
                "id": 100,
                "title": "Excel Programming with VBA Starter",
                "subtitle": "",
                "isbn13": "9781849688444",
                "price": "$9.99",
                "image": "https://itbook.store/img/books/9781849688444.png",
                "url": "https://itbook.store/books/9781849688444"
            },
            {
                "id": 101,
                "title": "Writing Excel Macros with VBA, 2nd Edition",
                "subtitle": "Writing Excel Macros with VBA, 2E PDF",
                "isbn13": "9780596003593",
                "price": "$4.84",
                "image": "https://itbook.store/img/books/9780596003593.png",
                "url": "https://itbook.store/books/9780596003593"
            },
            {
                "id": 102,
                "title": "Build Your Own ASP.NET 4 Web Site Using C# & VB, 4th Edition",
                "subtitle": "Using C# & VB",
                "isbn13": "9780987090867",
                "price": "$29.00",
                "image": "https://itbook.store/img/books/9780987090867.png",
                "url": "https://itbook.store/books/9780987090867"
            },
            {
                "id": 103,
                "title": "Excel VBA Notes for Professionals",
                "subtitle": "",
                "isbn13": "1001651325134",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/1001651325134.png",
                "url": "https://itbook.store/books/1001651325134"
            },
            {
                "id": 104,
                "title": "Microsoft Excel VBA and Macros",
                "subtitle": "Office 2021 and Microsoft 365",
                "isbn13": "9780137521524",
                "price": "$43.95",
                "image": "https://itbook.store/img/books/9780137521524.png",
                "url": "https://itbook.store/books/9780137521524"
            },
            {
                "id": 105,
                "title": "Professional ASP.NET 3.5 SP1 Edition",
                "subtitle": "In C# and VB",
                "isbn13": "9780470478264",
                "price": "$8.76",
                "image": "https://itbook.store/img/books/9780470478264.png",
                "url": "https://itbook.store/books/9780470478264"
            },
            {
                "id": 106,
                "title": "Excel VBA Programming For Dummies, 2nd Edition",
                "subtitle": "",
                "isbn13": "9780470503690",
                "price": "$19.35",
                "image": "https://itbook.store/img/books/9780470503690.png",
                "url": "https://itbook.store/books/9780470503690"
            },
            {
                "id": 107,
                "title": "Implementing Models of Financial Derivatives",
                "subtitle": "Object Oriented Applications with VBA",
                "isbn13": "9780470712207",
                "price": "$69.85",
                "image": "https://itbook.store/img/books/9780470712207.png",
                "url": "https://itbook.store/books/9780470712207"
            },
            {
                "id": 108,
                "title": "Excel VBA 24-Hour Trainer",
                "subtitle": "",
                "isbn13": "9780470890691",
                "price": "$24.99",
                "image": "https://itbook.store/img/books/9780470890691.png",
                "url": "https://itbook.store/books/9780470890691"
            },
            {
                "id": 109,
                "title": "Microsoft Access 2010 VBA Programming Inside Out",
                "subtitle": "",
                "isbn13": "9780735659872",
                "price": "$30.23",
                "image": "https://itbook.store/img/books/9780735659872.png",
                "url": "https://itbook.store/books/9780735659872"
            },
            {
                "id": 110,
                "title": "Excel VBA Programming For Dummies, 3rd Edition",
                "subtitle": "",
                "isbn13": "9781118490372",
                "price": "$5.25",
                "image": "https://itbook.store/img/books/9781118490372.png",
                "url": "https://itbook.store/books/9781118490372"
            },
            {
                "id": 111,
                "title": "VBA Notes for Professionals",
                "subtitle": "",
                "isbn13": "1001658151110",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/1001658151110.png",
                "url": "https://itbook.store/books/1001658151110"
            },
            {
                "id": 112,
                "title": "Windows Internals, Part 2, 7th Edition",
                "subtitle": "",
                "isbn13": "9780135462409",
                "price": "$53.49",
                "image": "https://itbook.store/img/books/9780135462409.png",
                "url": "https://itbook.store/books/9780135462409"
            },
            {
                "id": 113,
                "title": "Microsoft Excel Pivot Table Data Crunching",
                "subtitle": "Office 2021 and Microsoft 365",
                "isbn13": "9780137521838",
                "price": "$34.01",
                "image": "https://itbook.store/img/books/9780137521838.png",
                "url": "https://itbook.store/books/9780137521838"
            },
            {
                "id": 114,
                "title": "Microsoft Excel Inside Out",
                "subtitle": "Office 2021 and Microsoft 365",
                "isbn13": "9780137559534",
                "price": "$42.16",
                "image": "https://itbook.store/img/books/9780137559534.png",
                "url": "https://itbook.store/books/9780137559534"
            },
            {
                "id": 115,
                "title": "Microsoft Excel Data Analysis and Business Modeling, 7th Edition",
                "subtitle": "Office 2021 and Microsoft 365",
                "isbn13": "9780137613663",
                "price": "$34.87",
                "image": "https://itbook.store/img/books/9780137613663.png",
                "url": "https://itbook.store/books/9780137613663"
            },
            {
                "id": 116,
                "title": "Access 2007 VBA Bible",
                "subtitle": "For Data-Centric Microsoft Office Applications",
                "isbn13": "9780470047026",
                "price": "$9.94",
                "image": "https://itbook.store/img/books/9780470047026.png",
                "url": "https://itbook.store/books/9780470047026"
            },
            {
                "id": 117,
                "title": "Beginning ASP.NET 3.5",
                "subtitle": "In C# and VB",
                "isbn13": "9780470187593",
                "price": "$6.48",
                "image": "https://itbook.store/img/books/9780470187593.png",
                "url": "https://itbook.store/books/9780470187593"
            },
            {
                "id": 118,
                "title": "Professional ASP.NET 3.5 Security, Membership, and Role Management with C# and VB",
                "subtitle": "",
                "isbn13": "9780470379301",
                "price": "$7.21",
                "image": "https://itbook.store/img/books/9780470379301.png",
                "url": "https://itbook.store/books/9780470379301"
            },
            {
                "id": 119,
                "title": "Excel 2010 Formulas",
                "subtitle": "",
                "isbn13": "9780470475362",
                "price": "$5.26",
                "image": "https://itbook.store/img/books/9780470475362.png",
                "url": "https://itbook.store/books/9780470475362"
            },
            {
                "id": 120,
                "title": "Visual Studio 2010 and .NET 4 Six-in-One",
                "subtitle": "",
                "isbn13": "9780470499481",
                "price": "$4.17",
                "image": "https://itbook.store/img/books/9780470499481.png",
                "url": "https://itbook.store/books/9780470499481"
            },
            {
                "id": 121,
                "title": "AutoCAD 2007 and AutoCAD LT 2007 Bible",
                "subtitle": "",
                "isbn13": "9780471788867",
                "price": "$5.52",
                "image": "https://itbook.store/img/books/9780471788867.png",
                "url": "https://itbook.store/books/9780471788867"
            },
            {
                "id": 122,
                "title": ".NET Framework Essentials, 2nd Edition",
                "subtitle": "Introducing the .NET Framework",
                "isbn13": "9780596003029",
                "price": "$3.49",
                "image": "https://itbook.store/img/books/9780596003029.png",
                "url": "https://itbook.store/books/9780596003029"
            },
            {
                "id": 123,
                "title": "Access Data Analysis Cookbook",
                "subtitle": "Slicing and Dicing to Find the Results You Need",
                "isbn13": "9780596101220",
                "price": "$33.67",
                "image": "https://itbook.store/img/books/9780596101220.png",
                "url": "https://itbook.store/books/9780596101220"
            },
            {
                "id": 124,
                "title": "Programming Visual Basic 2008",
                "subtitle": "Build .NET 3.5 Applications with Microsoft's RAD Tool for Business",
                "isbn13": "9780596518431",
                "price": "$18.81",
                "image": "https://itbook.store/img/books/9780596518431.png",
                "url": "https://itbook.store/books/9780596518431"
            },
            {
                "id": 125,
                "title": "Regular Expressions Cookbook",
                "subtitle": "Detailed Solutions in Eight Programming Languages",
                "isbn13": "9780596520687",
                "price": "$7.04",
                "image": "https://itbook.store/img/books/9780596520687.png",
                "url": "https://itbook.store/books/9780596520687"
            },
            {
                "id": 126,
                "title": "Mastering Regular Expressions, 3rd Edition",
                "subtitle": "Understand Your Data and Be More Productive",
                "isbn13": "9780596528126",
                "price": "$13.84",
                "image": "https://itbook.store/img/books/9780596528126.png",
                "url": "https://itbook.store/books/9780596528126"
            },
            {
                "id": 127,
                "title": "A Programmer's Introduction to Visual Basic .NET",
                "subtitle": "",
                "isbn13": "9780672322648",
                "price": "$27.99",
                "image": "https://itbook.store/img/books/9780672322648.png",
                "url": "https://itbook.store/books/9780672322648"
            },
            {
                "id": 128,
                "title": "Sams Teach Yourself More Visual Basic .NET in 21 Days",
                "subtitle": "",
                "isbn13": "9780672322716",
                "price": "$3.78",
                "image": "https://itbook.store/img/books/9780672322716.png",
                "url": "https://itbook.store/books/9780672322716"
            },
            {
                "id": 129,
                "title": "Visual Basic 2010 Unleashed",
                "subtitle": "",
                "isbn13": "9780672331008",
                "price": "$4.17",
                "image": "https://itbook.store/img/books/9780672331008.png",
                "url": "https://itbook.store/books/9780672331008"
            },
            {
                "id": 130,
                "title": "Sams Teach Yourself Visual Basic 2010 in 24 Hours",
                "subtitle": "Complete Starter Kit",
                "isbn13": "9780672331138",
                "price": "$4.49",
                "image": "https://itbook.store/img/books/9780672331138.png",
                "url": "https://itbook.store/books/9780672331138"
            },
            {
                "id": 131,
                "title": "Android UI Design",
                "subtitle": "Plan, design, and build engaging user interfaces for your Android applications",
                "isbn13": "9781785887420",
                "price": "$31.99",
                "image": "https://itbook.store/img/books/9781785887420.png",
                "url": "https://itbook.store/books/9781785887420"
            },
            {
                "id": 132,
                "title": "Learning Kotlin by building Android Applications",
                "subtitle": "Explore the fundamentals of Kotlin by building real-world Android applications",
                "isbn13": "9781788474641",
                "price": "$35.99",
                "image": "https://itbook.store/img/books/9781788474641.png",
                "url": "https://itbook.store/books/9781788474641"
            },
            {
                "id": 133,
                "title": "Android 9 Development Cookbook, 3rd Edition",
                "subtitle": "Over 100 recipes and solutions to solve the most common problems faced by Android developers",
                "isbn13": "9781788991216",
                "price": "$31.99",
                "image": "https://itbook.store/img/books/9781788991216.png",
                "url": "https://itbook.store/books/9781788991216"
            },
            {
                "id": 134,
                "title": "Android Things Quick Start Guide",
                "subtitle": "Build your own smart devices using the Android Things platform",
                "isbn13": "9781789341799",
                "price": "$29.99",
                "image": "https://itbook.store/img/books/9781789341799.png",
                "url": "https://itbook.store/books/9781789341799"
            },
            {
                "id": 135,
                "title": "Android Programming for Beginners, 2nd Edition",
                "subtitle": "Build in-depth, full-featured Android 9 Pie apps starting from zero programming experience",
                "isbn13": "9781789538502",
                "price": "$44.99",
                "image": "https://itbook.store/img/books/9781789538502.png",
                "url": "https://itbook.store/books/9781789538502"
            },
            {
                "id": 136,
                "title": "Simplifying Android Development with Coroutines and Flows",
                "subtitle": "Learn how to use Kotlin coroutines and the flow API to handle data streams asynchronously in your Android app",
                "isbn13": "9781801816243",
                "price": "$34.99",
                "image": "https://itbook.store/img/books/9781801816243.png",
                "url": "https://itbook.store/books/9781801816243"
            },
            {
                "id": 137,
                "title": "Clean Android Architecture",
                "subtitle": "Take a layered approach to writing clean, testable, and decoupled Android applications",
                "isbn13": "9781803234588",
                "price": "$39.99",
                "image": "https://itbook.store/img/books/9781803234588.png",
                "url": "https://itbook.store/books/9781803234588"
            },
            {
                "id": 138,
                "title": "Android 4: New Features for Application Development",
                "subtitle": "Develop Android applications using the new features of Android Ice Cream Sandwich",
                "isbn13": "9781849519526",
                "price": "$14.99",
                "image": "https://itbook.store/img/books/9781849519526.png",
                "url": "https://itbook.store/books/9781849519526"
            },
            {
                "id": 139,
                "title": "Xamarin Studio for Android Programming: A C# Cookbook",
                "subtitle": "Over 50 hands-on recipes to help you get grips with Xamarin Studio and C# programming to develop market-ready Android applications",
                "isbn13": "9781849691406",
                "price": "$35.99",
                "image": "https://itbook.store/img/books/9781849691406.png",
                "url": "https://itbook.store/books/9781849691406"
            },
            {
                "id": 140,
                "title": "Android Native Development Kit Cookbook",
                "subtitle": "A step-by-step tutorial with more than 60 concise recipes on Android NDK development skills",
                "isbn13": "9781849691505",
                "price": "$29.99",
                "image": "https://itbook.store/img/books/9781849691505.png",
                "url": "https://itbook.store/books/9781849691505"
            },
            {
                "id": 141,
                "title": "Learning Pentesting for Android Devices",
                "subtitle": "A practical guide to learning penetration testing for Android devices and applications",
                "isbn13": "9781783288984",
                "price": "$17.99",
                "image": "https://itbook.store/img/books/9781783288984.png",
                "url": "https://itbook.store/books/9781783288984"
            },
            {
                "id": 142,
                "title": "Xamarin Mobile Application Development for Android",
                "subtitle": "Learn to develop full featured Android apps using your existing C# skills with Xamarin.Android",
                "isbn13": "9781783559169",
                "price": "$4.28",
                "image": "https://itbook.store/img/books/9781783559169.png",
                "url": "https://itbook.store/books/9781783559169"
            },
            {
                "id": 143,
                "title": "Android Application Development with Maven",
                "subtitle": "Learn how to use and configure Maven to support all phases of the development of an Android application",
                "isbn13": "9781783986101",
                "price": "$29.99",
                "image": "https://itbook.store/img/books/9781783986101.png",
                "url": "https://itbook.store/books/9781783986101"
            },
            {
                "id": 144,
                "title": "Gradle for Android",
                "subtitle": "Automate the build process for your Android projects with Gradle",
                "isbn13": "9781783986828",
                "price": "$27.99",
                "image": "https://itbook.store/img/books/9781783986828.png",
                "url": "https://itbook.store/books/9781783986828"
            },
            {
                "id": 145,
                "title": "Arduino Android Blueprints",
                "subtitle": "Get the best out of Arduino by interfacing it with Android to create engaging interactive projects",
                "isbn13": "9781784390389",
                "price": "$26.99",
                "image": "https://itbook.store/img/books/9781784390389.png",
                "url": "https://itbook.store/books/9781784390389"
            },
            {
                "id": 146,
                "title": "Exploring SE for Android",
                "subtitle": "Discover Security Enhancements (SE) for Android to build your own protected Android-based systems",
                "isbn13": "9781784390594",
                "price": "$26.99",
                "image": "https://itbook.store/img/books/9781784390594.png",
                "url": "https://itbook.store/books/9781784390594"
            },
            {
                "id": 147,
                "title": "Android for the BeagleBone Black",
                "subtitle": "Design and implement Android apps that interface with your own custom hardware circuits and the BeagleBone Black",
                "isbn13": "9781784392161",
                "price": "$14.99",
                "image": "https://itbook.store/img/books/9781784392161.png",
                "url": "https://itbook.store/books/9781784392161"
            },
            {
                "id": 148,
                "title": "Learning Unity Android Game Development",
                "subtitle": "Learn to create stunning Android games using Unity",
                "isbn13": "9781784394691",
                "price": "$14.97",
                "image": "https://itbook.store/img/books/9781784394691.png",
                "url": "https://itbook.store/books/9781784394691"
            },
            {
                "id": 149,
                "title": "Xamarin Mobile Development for Android Cookbook",
                "subtitle": "Over 80 hands-on recipes to unleash full potential for Xamarin in development and monetization of feature-packed, real-world Android apps",
                "isbn13": "9781784398576",
                "price": "$39.99",
                "image": "https://itbook.store/img/books/9781784398576.png",
                "url": "https://itbook.store/books/9781784398576"
            },
            {
                "id": 150,
                "title": "Learning Java by Building Android Games",
                "subtitle": "Get ready for a fun-filled experience of learning Java by developing games for the Android platform",
                "isbn13": "9781784398859",
                "price": "$26.99",
                "image": "https://itbook.store/img/books/9781784398859.png",
                "url": "https://itbook.store/books/9781784398859"
            },
            {
                "id": 151,
                "title": "Android Developer Tools Essentials",
                "subtitle": "Android Studio to Zipalign",
                "isbn13": "9781449328214",
                "price": "$12.52",
                "image": "https://itbook.store/img/books/9781449328214.png",
                "url": "https://itbook.store/books/9781449328214"
            },
            {
                "id": 152,
                "title": "Android Cookbook, 2nd Edition",
                "subtitle": "Problems and Solutions for Android Developers",
                "isbn13": "9781449374433",
                "price": "$50.95",
                "image": "https://itbook.store/img/books/9781449374433.png",
                "url": "https://itbook.store/books/9781449374433"
            },
            {
                "id": 153,
                "title": "Learning Android",
                "subtitle": "Building Applications for the Android Market",
                "isbn13": "9781449390501",
                "price": "$22.60",
                "image": "https://itbook.store/img/books/9781449390501.png",
                "url": "https://itbook.store/books/9781449390501"
            },
            {
                "id": 154,
                "title": "Developing Android Applications with Adobe AIR",
                "subtitle": "An ActionScript Developer's Guide to Building Android Applications",
                "isbn13": "9781449394820",
                "price": "$6.24",
                "image": "https://itbook.store/img/books/9781449394820.png",
                "url": "https://itbook.store/books/9781449394820"
            },
            {
                "id": 155,
                "title": "Android Recipes, 4th Edition",
                "subtitle": "A Problem-Solution Approach for Android 5.0",
                "isbn13": "9781484204764",
                "price": "$21.00",
                "image": "https://itbook.store/img/books/9781484204764.png",
                "url": "https://itbook.store/books/9781484204764"
            },
            {
                "id": 156,
                "title": "Learn Android Studio 3",
                "subtitle": "Efficient Android App Development",
                "isbn13": "9781484231555",
                "price": "$37.39",
                "image": "https://itbook.store/img/books/9781484231555.png",
                "url": "https://itbook.store/books/9781484231555"
            },
            {
                "id": 157,
                "title": "Learn Android Studio 3 with Kotlin",
                "subtitle": "Efficient Android App Development",
                "isbn13": "9781484239063",
                "price": "$26.78",
                "image": "https://itbook.store/img/books/9781484239063.png",
                "url": "https://itbook.store/books/9781484239063"
            },
            {
                "id": 158,
                "title": "Android Security Internals",
                "subtitle": "An In-Depth Guide to Android's Security Architecture",
                "isbn13": "9781593275815",
                "price": "$23.99",
                "image": "https://itbook.store/img/books/9781593275815.png",
                "url": "https://itbook.store/books/9781593275815"
            },
            {
                "id": 159,
                "title": "Spring for Android Starter",
                "subtitle": "Leverage Spring for Android to create RESTful and OAuth Android apps",
                "isbn13": "9781782161905",
                "price": "$14.99",
                "image": "https://itbook.store/img/books/9781782161905.png",
                "url": "https://itbook.store/books/9781782161905"
            },
            {
                "id": 160,
                "title": "Android Studio Application Development",
                "subtitle": "Create visually appealing applications using the new IntelliJ IDE Android Studio",
                "isbn13": "9781783285273",
                "price": "$17.99",
                "image": "https://itbook.store/img/books/9781783285273.png",
                "url": "https://itbook.store/books/9781783285273"
            },
            {
                "id": 161,
                "title": "Learning Android Game Programming",
                "subtitle": "A Hands-On Guide to Building Your First Android Game",
                "isbn13": "9780321769626",
                "price": "$8.40",
                "image": "https://itbook.store/img/books/9780321769626.png",
                "url": "https://itbook.store/books/9780321769626"
            },
            {
                "id": 162,
                "title": "Learning Android Application Programming for the Kindle Fire",
                "subtitle": "A Hands-On Guide to Building Your First Android Application",
                "isbn13": "9780321833976",
                "price": "$11.96",
                "image": "https://itbook.store/img/books/9780321833976.png",
                "url": "https://itbook.store/books/9780321833976"
            },
            {
                "id": 163,
                "title": "The Android Developer's Cookbook, 2nd Edition",
                "subtitle": "Building Applications with the Android SDK",
                "isbn13": "9780321897534",
                "price": "$33.21",
                "image": "https://itbook.store/img/books/9780321897534.png",
                "url": "https://itbook.store/books/9780321897534"
            },
            {
                "id": 164,
                "title": "Introduction to Android Application Development, 4th Edition",
                "subtitle": "Android Essentials",
                "isbn13": "9780321940261",
                "price": "$25.00",
                "image": "https://itbook.store/img/books/9780321940261.png",
                "url": "https://itbook.store/books/9780321940261"
            },
            {
                "id": 165,
                "title": "Enterprise Android",
                "subtitle": "Programming Android Database Applications for the Enterprise",
                "isbn13": "9781118183496",
                "price": "$4.39",
                "image": "https://itbook.store/img/books/9781118183496.png",
                "url": "https://itbook.store/books/9781118183496"
            },
            {
                "id": 166,
                "title": "Pro Android Web Apps",
                "subtitle": "Develop for Android using HTML5, CSS3 & JavaScript",
                "isbn13": "9781430232766",
                "price": "$34.99",
                "image": "https://itbook.store/img/books/9781430232766.png",
                "url": "https://itbook.store/books/9781430232766"
            },
            {
                "id": 167,
                "title": "Beginning Android Web Apps Development",
                "subtitle": "Develop for Android using HTML5, CSS3, and JavaScript",
                "isbn13": "9781430239574",
                "price": "$34.99",
                "image": "https://itbook.store/img/books/9781430239574.png",
                "url": "https://itbook.store/books/9781430239574"
            },
            {
                "id": 168,
                "title": "Beginning Android, 5th edition",
                "subtitle": "Get started building apps for the Android platform",
                "isbn13": "9781430246862",
                "price": "$34.79",
                "image": "https://itbook.store/img/books/9781430246862.png",
                "url": "https://itbook.store/books/9781430246862"
            },
            {
                "id": 169,
                "title": "Learn Android Studio",
                "subtitle": "Build Android Apps Quickly and Effectively",
                "isbn13": "9781430266013",
                "price": "$24.95",
                "image": "https://itbook.store/img/books/9781430266013.png",
                "url": "https://itbook.store/books/9781430266013"
            },
            {
                "id": 170,
                "title": "Developing Android Applications with Flex 4.5",
                "subtitle": "Building Android Applications with ActionScript",
                "isbn13": "9781449305376",
                "price": "$16.99",
                "image": "https://itbook.store/img/books/9781449305376.png",
                "url": "https://itbook.store/books/9781449305376"
            },
            {
                "id": 171,
                "title": "Learning Kotlin by building Android Applications",
                "subtitle": "Explore the fundamentals of Kotlin by building real-world Android applications",
                "isbn13": "9781788474641",
                "price": "$35.99",
                "image": "https://itbook.store/img/books/9781788474641.png",
                "url": "https://itbook.store/books/9781788474641"
            },
            {
                "id": 172,
                "title": "Hands-On Serverless Applications with Kotlin",
                "subtitle": "Develop scalable and cost-effective web applications using AWS Lambda and Kotlin",
                "isbn13": "9781788993708",
                "price": "$44.99",
                "image": "https://itbook.store/img/books/9781788993708.png",
                "url": "https://itbook.store/books/9781788993708"
            },
            {
                "id": 173,
                "title": "Mastering High Performance with Kotlin",
                "subtitle": "Overcome performance difficulties in Kotlin with a range of exciting techniques and solutions",
                "isbn13": "9781788996648",
                "price": "$35.99",
                "image": "https://itbook.store/img/books/9781788996648.png",
                "url": "https://itbook.store/books/9781788996648"
            },
            {
                "id": 174,
                "title": "Kotlin for Enterprise Applications using Java EE",
                "subtitle": "Develop, test, and troubleshoot enterprise applications and microservices with Kotlin and Java EE",
                "isbn13": "9781788997270",
                "price": "$43.86",
                "image": "https://itbook.store/img/books/9781788997270.png",
                "url": "https://itbook.store/books/9781788997270"
            },
            {
                "id": 175,
                "title": "Hands-On Object-Oriented Programming with Kotlin",
                "subtitle": "Build robust software with reusable code using OOP principles and design patterns in Kotlin",
                "isbn13": "9781789617726",
                "price": "$44.99",
                "image": "https://itbook.store/img/books/9781789617726.png",
                "url": "https://itbook.store/books/9781789617726"
            },
            {
                "id": 176,
                "title": "Kotlin Notes for Professionals",
                "subtitle": "",
                "isbn13": "1001655733745",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/1001655733745.png",
                "url": "https://itbook.store/books/1001655733745"
            },
            {
                "id": 177,
                "title": "Pro Android with Kotlin",
                "subtitle": "Developing Modern Mobile Apps",
                "isbn13": "9781484238196",
                "price": "$34.30",
                "image": "https://itbook.store/img/books/9781484238196.png",
                "url": "https://itbook.store/books/9781484238196"
            },
            {
                "id": 178,
                "title": "Learn Android Studio 3 with Kotlin",
                "subtitle": "Efficient Android App Development",
                "isbn13": "9781484239063",
                "price": "$26.78",
                "image": "https://itbook.store/img/books/9781484239063.png",
                "url": "https://itbook.store/books/9781484239063"
            },
            {
                "id": 179,
                "title": "Kotlin Cookbook",
                "subtitle": "A Problem-Focused Approach",
                "isbn13": "9781492046677",
                "price": "$34.99",
                "image": "https://itbook.store/img/books/9781492046677.png",
                "url": "https://itbook.store/books/9781492046677"
            },
            {
                "id": 180,
                "title": "Programming Android with Kotlin",
                "subtitle": "Achieving Structured Concurrency with Coroutines",
                "isbn13": "9781492063001",
                "price": "$44.09",
                "image": "https://itbook.store/img/books/9781492063001.png",
                "url": "https://itbook.store/books/9781492063001"
            },
            {
                "id": 181,
                "title": "Spring Boot: Up and Running",
                "subtitle": "Building Cloud Native Java and Kotlin Applications",
                "isbn13": "9781492076988",
                "price": "$44.09",
                "image": "https://itbook.store/img/books/9781492076988.png",
                "url": "https://itbook.store/books/9781492076988"
            },
            {
                "id": 182,
                "title": "Java to Kotlin",
                "subtitle": "A Refactoring Guidebook",
                "isbn13": "9781492082279",
                "price": "$48.49",
                "image": "https://itbook.store/img/books/9781492082279.png",
                "url": "https://itbook.store/books/9781492082279"
            },
            {
                "id": 183,
                "title": "Kotlin in Action",
                "subtitle": "",
                "isbn13": "9781617293290",
                "price": "$31.99",
                "image": "https://itbook.store/img/books/9781617293290.png",
                "url": "https://itbook.store/books/9781617293290"
            },
            {
                "id": 184,
                "title": "The Joy of Kotlin",
                "subtitle": "",
                "isbn13": "9781617295362",
                "price": "$30.00",
                "image": "https://itbook.store/img/books/9781617295362.png",
                "url": "https://itbook.store/books/9781617295362"
            },
            {
                "id": 185,
                "title": "Functional Programming in Kotlin",
                "subtitle": "",
                "isbn13": "9781617297168",
                "price": "$18.63",
                "image": "https://itbook.store/img/books/9781617297168.png",
                "url": "https://itbook.store/books/9781617297168"
            },
            {
                "id": 186,
                "title": "Programming Kotlin",
                "subtitle": "Create Elegant, Expressive, and Performant JVM and Android Applications",
                "isbn13": "9781680506358",
                "price": "$38.99",
                "image": "https://itbook.store/img/books/9781680506358.png",
                "url": "https://itbook.store/books/9781680506358"
            },
            {
                "id": 187,
                "title": "Programming DSLs in Kotlin",
                "subtitle": "Design Expressive and Robust Special Purpose Code",
                "isbn13": "9781680507935",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/9781680507935.png",
                "url": "https://itbook.store/books/9781680507935"
            },
            {
                "id": 188,
                "title": "Kotlin Quick Start Guide",
                "subtitle": "Core features to get you ready for developing applications",
                "isbn13": "9781789344189",
                "price": "$19.73",
                "image": "https://itbook.store/img/books/9781789344189.png",
                "url": "https://itbook.store/books/9781789344189"
            },
            {
                "id": 189,
                "title": "Kickstart Modern Android Development with Jetpack and Kotlin",
                "subtitle": "Enhance your applications by integrating Jetpack and applying modern app architectural concepts",
                "isbn13": "9781801811071",
                "price": "$44.99",
                "image": "https://itbook.store/img/books/9781801811071.png",
                "url": "https://itbook.store/books/9781801811071"
            },
            {
                "id": 190,
                "title": "Simplifying Android Development with Coroutines and Flows",
                "subtitle": "Learn how to use Kotlin coroutines and the flow API to handle data streams asynchronously in your Android app",
                "isbn13": "9781801816243",
                "price": "$34.99",
                "image": "https://itbook.store/img/books/9781801816243.png",
                "url": "https://itbook.store/books/9781801816243"
            },
            {
                "id": 191,
                "title": "Beginning App Development with Flutter",
                "subtitle": "Create Cross-Platform Mobile Apps",
                "isbn13": "9781484251805",
                "price": "$30.88",
                "image": "https://itbook.store/img/books/9781484251805.png",
                "url": "https://itbook.store/books/9781484251805"
            },
            {
                "id": 192,
                "title": "Spring Boot in Practice",
                "subtitle": "",
                "isbn13": "9781617298813",
                "price": "$59.99",
                "image": "https://itbook.store/img/books/9781617298813.png",
                "url": "https://itbook.store/books/9781617298813"
            },
            {
                "id": 193,
                "title": "Programming Flutter",
                "subtitle": "Native, Cross-Platform Apps the Easy Way",
                "isbn13": "9781680506952",
                "price": "$42.73",
                "image": "https://itbook.store/img/books/9781680506952.png",
                "url": "https://itbook.store/books/9781680506952"
            },
            {
                "id": 194,
                "title": "Sams Teach Yourself TCP/IP in 24 Hours, 6th Edition",
                "subtitle": "",
                "isbn13": "9780672337895",
                "price": "$22.99",
                "image": "https://itbook.store/img/books/9780672337895.png",
                "url": "https://itbook.store/books/9780672337895"
            },
            {
                "id": 195,
                "title": "Exploring BeagleBone, 2nd Edition",
                "subtitle": "Tools and Techniques for Building with Embedded Linux",
                "isbn13": "9781119533160",
                "price": "$31.70",
                "image": "https://itbook.store/img/books/9781119533160.png",
                "url": "https://itbook.store/books/9781119533160"
            },
            {
                "id": 196,
                "title": "Security Designs for the Cloud, IoT, and Social Networking",
                "subtitle": "",
                "isbn13": "9781119592266",
                "price": "$156.51",
                "image": "https://itbook.store/img/books/9781119592266.png",
                "url": "https://itbook.store/books/9781119592266"
            },
            {
                "id": 197,
                "title": "Blockchain",
                "subtitle": "A Practical Guide to Developing Business, Law, and Technology Solutions",
                "isbn13": "9781260115871",
                "price": "$14.99",
                "image": "https://itbook.store/img/books/9781260115871.png",
                "url": "https://itbook.store/books/9781260115871"
            },
            {
                "id": 198,
                "title": "Pro Android Wearables",
                "subtitle": "Building Apps for Smartwatches",
                "isbn13": "9781430265504",
                "price": "$42.24",
                "image": "https://itbook.store/img/books/9781430265504.png",
                "url": "https://itbook.store/books/9781430265504"
            },
            {
                "id": 199,
                "title": "Designing Connected Products",
                "subtitle": "UX for the Consumer Internet of Things",
                "isbn13": "9781449372569",
                "price": "$29.99",
                "image": "https://itbook.store/img/books/9781449372569.png",
                "url": "https://itbook.store/books/9781449372569"
            },
            {
                "id": 200,
                "title": "CSS: The Definitive Guide, 4th Edition",
                "subtitle": "Visual Presentation for the Web",
                "isbn13": "9781449393199",
                "price": "$56.34",
                "image": "https://itbook.store/img/books/9781449393199.png",
                "url": "https://itbook.store/books/9781449393199"
            },
            {
                "id": 201,
                "title": "MySQL for the Internet of Things",
                "subtitle": "Data management for sensors and connected devices",
                "isbn13": "9781484212943",
                "price": "$25.44",
                "image": "https://itbook.store/img/books/9781484212943.png",
                "url": "https://itbook.store/books/9781484212943"
            },
            {
                "id": 202,
                "title": "Real World Windows 10 Development, 2nd Edition",
                "subtitle": "",
                "isbn13": "9781484214503",
                "price": "$53.72",
                "image": "https://itbook.store/img/books/9781484214503.png",
                "url": "https://itbook.store/books/9781484214503"
            },
            {
                "id": 203,
                "title": "Pro Spark Streaming",
                "subtitle": "The Zen of Real-time Analytics using Apache Spark",
                "isbn13": "9781484214800",
                "price": "$21.98",
                "image": "https://itbook.store/img/books/9781484214800.png",
                "url": "https://itbook.store/books/9781484214800"
            },
            {
                "id": 204,
                "title": "Using the Web to Build the IoT",
                "subtitle": "",
                "isbn13": "9781617294006",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/9781617294006.png",
                "url": "https://itbook.store/books/9781617294006"
            },
            {
                "id": 205,
                "title": "Internet of Things with Python",
                "subtitle": "Interact with the world and rapidly prototype IoT applications using Python",
                "isbn13": "9781785881381",
                "price": "$34.99",
                "image": "https://itbook.store/img/books/9781785881381.png",
                "url": "https://itbook.store/books/9781785881381"
            },
            {
                "id": 206,
                "title": "Internet of Things for Architects",
                "subtitle": "Architecting IoT solutions by implementing sensors, communication infrastructure, edge computing, analytics, and security",
                "isbn13": "9781788470599",
                "price": "$44.99",
                "image": "https://itbook.store/img/books/9781788470599.png",
                "url": "https://itbook.store/books/9781788470599"
            },
            {
                "id": 207,
                "title": "Delphi Cookbook, 3rd Edition",
                "subtitle": "Recipes to master Delphi for IoT integrations, cross-platform, mobile and server-side development",
                "isbn13": "9781788621304",
                "price": "$49.99",
                "image": "https://itbook.store/img/books/9781788621304.png",
                "url": "https://itbook.store/books/9781788621304"
            },
            {
                "id": 208,
                "title": "Internet of Things with Raspberry Pi 3",
                "subtitle": "Leverage the power of Raspberry Pi 3 and JavaScript to build exciting IoT projects",
                "isbn13": "9781788627405",
                "price": "$24.99",
                "image": "https://itbook.store/img/books/9781788627405.png",
                "url": "https://itbook.store/books/9781788627405"
            },
            {
                "id": 209,
                "title": "Internet of Things Programming Projects",
                "subtitle": "Build modern IoT solutions with the Raspberry Pi 3 and Python",
                "isbn13": "9781789134803",
                "price": "$39.99",
                "image": "https://itbook.store/img/books/9781789134803.png",
                "url": "https://itbook.store/books/9781789134803"
            },
            {
                "id": 210,
                "title": "Hands-On MQTT Programming with Python",
                "subtitle": "Work with the lightweight IoT protocol in Python",
                "isbn13": "9781789138542",
                "price": "$34.99",
                "image": "https://itbook.store/img/books/9781789138542.png",
                "url": "https://itbook.store/books/9781789138542"
            },
            {
                "id": 211,
                "title": "Hands-On Industrial Internet of Things",
                "subtitle": "Create a powerful Industrial IoT infrastructure using Industry 4.0",
                "isbn13": "9781789537222",
                "price": "$44.99",
                "image": "https://itbook.store/img/books/9781789537222.png",
                "url": "https://itbook.store/books/9781789537222"
            },
            {
                "id": 212,
                "title": "The Real-Time APIs",
                "subtitle": "Design, Operation, and Observation",
                "isbn13": "1001649336584",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/1001649336584.png",
                "url": "https://itbook.store/books/1001649336584"
            },
            {
                "id": 213,
                "title": "Microsoft Azure Security Center, 2nd Edition",
                "subtitle": "",
                "isbn13": "9780135752036",
                "price": "$31.99",
                "image": "https://itbook.store/img/books/9780135752036.png",
                "url": "https://itbook.store/books/9780135752036"
            },
            {
                "id": 214,
                "title": "Beginning LoRa Radio Networks with Arduino",
                "subtitle": "Build Long Range, Low Power Wireless IoT Networks",
                "isbn13": "9781484243565",
                "price": "$29.21",
                "image": "https://itbook.store/img/books/9781484243565.png",
                "url": "https://itbook.store/books/9781484243565"
            },
            {
                "id": 215,
                "title": "Build Your Own IoT Platform",
                "subtitle": "Develop a Fully Flexible and Scalable Internet of Things Platform in 24 Hours",
                "isbn13": "9781484244975",
                "price": "$26.01",
                "image": "https://itbook.store/img/books/9781484244975.png",
                "url": "https://itbook.store/books/9781484244975"
            },
            {
                "id": 216,
                "title": "Beginning Azure IoT Edge Computing",
                "subtitle": "Extending the Cloud to the Intelligent Edge",
                "isbn13": "9781484245354",
                "price": "$22.20",
                "image": "https://itbook.store/img/books/9781484245354.png",
                "url": "https://itbook.store/books/9781484245354"
            },
            {
                "id": 217,
                "title": "Commercial and Industrial Internet of Things Applications with the Raspberry Pi",
                "subtitle": "Prototyping IoT Solutions",
                "isbn13": "9781484252956",
                "price": "$29.77",
                "image": "https://itbook.store/img/books/9781484252956.png",
                "url": "https://itbook.store/books/9781484252956"
            },
            {
                "id": 218,
                "title": "IoT Machine Learning Applications in Telecom, Energy, and Agriculture",
                "subtitle": "With Raspberry Pi and Arduino Using Python",
                "isbn13": "9781484255483",
                "price": "$34.99",
                "image": "https://itbook.store/img/books/9781484255483.png",
                "url": "https://itbook.store/books/9781484255483"
            },
            {
                "id": 219,
                "title": "Real-Time IoT Imaging with Deep Neural Networks",
                "subtitle": "Using Java on the Raspberry Pi 4",
                "isbn13": "9781484257210",
                "price": "$16.19",
                "image": "https://itbook.store/img/books/9781484257210.png",
                "url": "https://itbook.store/books/9781484257210"
            },
            {
                "id": 220,
                "title": "Build Your Own IoT Platform, 2nd Edition",
                "subtitle": "Develop a Flexible and Scalable Internet of Things Platform",
                "isbn13": "9781484280720",
                "price": "$49.99",
                "image": "https://itbook.store/img/books/9781484280720.png",
                "url": "https://itbook.store/books/9781484280720"
            },
            {
                "id": 221,
                "title": "Beginning MicroPython with the Raspberry Pi Pico",
                "subtitle": "Build Electronics and IoT Projects",
                "isbn13": "9781484281345",
                "price": "$49.99",
                "image": "https://itbook.store/img/books/9781484281345.png",
                "url": "https://itbook.store/books/9781484281345"
            },
            {
                "id": 222,
                "title": "Enterprise IoT",
                "subtitle": "Strategies and Best Practices for Connected Products and Services",
                "isbn13": "9781491924839",
                "price": "$35.99",
                "image": "https://itbook.store/img/books/9781491924839.png",
                "url": "https://itbook.store/books/9781491924839"
            },
            {
                "id": 223,
                "title": "Programming for the Internet of Things",
                "subtitle": "Using Windows 10 IoT Core and Azure IoT Suite",
                "isbn13": "9781509302062",
                "price": "$22.20",
                "image": "https://itbook.store/img/books/9781509302062.png",
                "url": "https://itbook.store/books/9781509302062"
            },
            {
                "id": 224,
                "title": "Building IoT Visualizations using Grafana",
                "subtitle": "Power up your IoT projects and monitor with Prometheus, LibreNMS, and Elasticsearch",
                "isbn13": "9781803236124",
                "price": "$49.99",
                "image": "https://itbook.store/img/books/9781803236124.png",
                "url": "https://itbook.store/books/9781803236124"
            },
            {
                "id": 225,
                "title": "Designing Production-Grade and Large-Scale IoT Solutions",
                "subtitle": "A comprehensive and practical guide to implementing end-to-end IoT solutions",
                "isbn13": "9781838829254",
                "price": "$44.99",
                "image": "https://itbook.store/img/books/9781838829254.png",
                "url": "https://itbook.store/books/9781838829254"
            },
            {
                "id": 226,
                "title": "IoT and Edge Computing for Architects, 2nd Edition",
                "subtitle": "Implementing edge and IoT systems from sensors to clouds with communication systems, analytics, and security",
                "isbn13": "9781839214806",
                "price": "$43.63",
                "image": "https://itbook.store/img/books/9781839214806.png",
                "url": "https://itbook.store/books/9781839214806"
            },
            {
                "id": 227,
                "title": "Microservices, IoT, and Azure",
                "subtitle": "Leveraging DevOps and Microservice Architecture to deliver SaaS Solutions",
                "isbn13": "9781484212769",
                "price": "$33.98",
                "image": "https://itbook.store/img/books/9781484212769.png",
                "url": "https://itbook.store/books/9781484212769"
            },
            {
                "id": 228,
                "title": "Raspberry Pi IoT Projects",
                "subtitle": "Prototyping Experiments for Makers",
                "isbn13": "9781484213780",
                "price": "$22.35",
                "image": "https://itbook.store/img/books/9781484213780.png",
                "url": "https://itbook.store/books/9781484213780"
            },
            {
                "id": 229,
                "title": "Demystifying Internet of Things Security",
                "subtitle": "Successful IoT Device/Edge and Platform Security Deployment",
                "isbn13": "9781484228951",
                "price": "$31.62",
                "image": "https://itbook.store/img/books/9781484228951.png",
                "url": "https://itbook.store/books/9781484228951"
            },
            {
                "id": 230,
                "title": "Defending IoT Infrastructures with the Raspberry Pi",
                "subtitle": "Monitoring and Detecting Nefarious Behavior in Real Time",
                "isbn13": "9781484236994",
                "price": "$24.99",
                "image": "https://itbook.store/img/books/9781484236994.png",
                "url": "https://itbook.store/books/9781484236994"
            },
            {
                "id": 231,
                "title": "Design, Launch, and Scale IoT Services",
                "subtitle": "A Practical Business Approach",
                "isbn13": "9781484237113",
                "price": "$29.99",
                "image": "https://itbook.store/img/books/9781484237113.png",
                "url": "https://itbook.store/books/9781484237113"
            },
            {
                "id": 232,
                "title": "Raspbian OS Programming with the Raspberry Pi",
                "subtitle": "IoT Projects with Wolfram, Mathematica, and Scratch",
                "isbn13": "9781484242117",
                "price": "$24.09",
                "image": "https://itbook.store/img/books/9781484242117.png",
                "url": "https://itbook.store/books/9781484242117"
            },
            {
                "id": 233,
                "title": "The IoT Hacker's Handbook",
                "subtitle": "A Practical Guide to Hacking the Internet of Things",
                "isbn13": "9781484242995",
                "price": "$28.93",
                "image": "https://itbook.store/img/books/9781484242995.png",
                "url": "https://itbook.store/books/9781484242995"
            },
            {
                "id": 234,
                "title": "Building Arduino Projects for the Internet of Things",
                "subtitle": "Experiments with Real-World Applications",
                "isbn13": "9781484219393",
                "price": "$37.99",
                "image": "https://itbook.store/img/books/9781484219393.png",
                "url": "https://itbook.store/books/9781484219393"
            },
            {
                "id": 235,
                "title": "Beginning Samsung ARTIK",
                "subtitle": "A Guide for Developers",
                "isbn13": "9781484219515",
                "price": "$39.99",
                "image": "https://itbook.store/img/books/9781484219515.png",
                "url": "https://itbook.store/books/9781484219515"
            },
            {
                "id": 236,
                "title": "Machine Learning for Decision Makers",
                "subtitle": "Cognitive Computing Fundamentals for Better Decision Making",
                "isbn13": "9781484229873",
                "price": "$29.99",
                "image": "https://itbook.store/img/books/9781484229873.png",
                "url": "https://itbook.store/books/9781484229873"
            },
            {
                "id": 237,
                "title": "Build Better Chatbots",
                "subtitle": "A Complete Guide to Getting Started with Chatbots",
                "isbn13": "9781484231104",
                "price": "$27.63",
                "image": "https://itbook.store/img/books/9781484231104.png",
                "url": "https://itbook.store/books/9781484231104"
            },
            {
                "id": 238,
                "title": "Practical Contiki-NG",
                "subtitle": "Programming for Wireless Sensor Networks",
                "isbn13": "9781484234075",
                "price": "$28.33",
                "image": "https://itbook.store/img/books/9781484234075.png",
                "url": "https://itbook.store/books/9781484234075"
            },
            {
                "id": 239,
                "title": "Raspberry Pi for Arduino Users",
                "subtitle": "Building IoT and Network Applications and Devices",
                "isbn13": "9781484234136",
                "price": "$22.34",
                "image": "https://itbook.store/img/books/9781484234136.png",
                "url": "https://itbook.store/books/9781484234136"
            },
            {
                "id": 240,
                "title": "Program the Internet of Things with Swift for iOS, 2nd Edition",
                "subtitle": "Learn How to Program Apps for the Internet of Things",
                "isbn13": "9781484235126",
                "price": "$28.47",
                "image": "https://itbook.store/img/books/9781484235126.png",
                "url": "https://itbook.store/books/9781484235126"
            },
            {
                "id": 241,
                "title": "Asset Attack Vectors",
                "subtitle": "Building Effective Vulnerability Management Strategies to Protect Organizations",
                "isbn13": "9781484236260",
                "price": "$22.94",
                "image": "https://itbook.store/img/books/9781484236260.png",
                "url": "https://itbook.store/books/9781484236260"
            },
            {
                "id": 242,
                "title": "How to Compete in the Age of Artificial Intelligence",
                "subtitle": "Implementing a Collaborative Human-Machine Strategy for Your Business",
                "isbn13": "9781484238073",
                "price": "$23.64",
                "image": "https://itbook.store/img/books/9781484238073.png",
                "url": "https://itbook.store/books/9781484238073"
            },
            {
                "id": 243,
                "title": "Block Trace Analysis and Storage System Optimization",
                "subtitle": "A Practical Approach with MATLAB/Python Tools",
                "isbn13": "9781484239278",
                "price": "$30.00",
                "image": "https://itbook.store/img/books/9781484239278.png",
                "url": "https://itbook.store/books/9781484239278"
            },
            {
                "id": 244,
                "title": "Building Digital Experience Platforms",
                "subtitle": "A Guide to Developing Next-Generation Enterprise Applications",
                "isbn13": "9781484243022",
                "price": "$24.77",
                "image": "https://itbook.store/img/books/9781484243022.png",
                "url": "https://itbook.store/books/9781484243022"
            },
            {
                "id": 245,
                "title": "Windows 10 for the Internet of Things, 2nd Edition",
                "subtitle": "Controlling Internet-Connected Devices from Raspberry Pi",
                "isbn13": "9781484266083",
                "price": "$44.74",
                "image": "https://itbook.store/img/books/9781484266083.png",
                "url": "https://itbook.store/books/9781484266083"
            },
            {
                "id": 246,
                "title": "Abusing the Internet of Things",
                "subtitle": "Blackouts, Freakouts, and Stakeouts",
                "isbn13": "9781491902332",
                "price": "$25.00",
                "image": "https://itbook.store/img/books/9781491902332.png",
                "url": "https://itbook.store/books/9781491902332"
            },
            {
                "id": 247,
                "title": "Arduino Cookbook, 3rd Edition",
                "subtitle": "Recipes to Begin, Expand, and Enhance Your Projects",
                "isbn13": "9781491903520",
                "price": "$29.99",
                "image": "https://itbook.store/img/books/9781491903520.png",
                "url": "https://itbook.store/books/9781491903520"
            },
            {
                "id": 248,
                "title": "Mastering Azure Analytics",
                "subtitle": "Architecting in the Cloud with Azure Data Lake, HDInsight, and Spark",
                "isbn13": "9781491956656",
                "price": "$22.99",
                "image": "https://itbook.store/img/books/9781491956656.png",
                "url": "https://itbook.store/books/9781491956656"
            },
            {
                "id": 249,
                "title": "Getting Started with Kudu",
                "subtitle": "Perform Fast Analytics on Fast Data",
                "isbn13": "9781491980255",
                "price": "$40.44",
                "image": "https://itbook.store/img/books/9781491980255.png",
                "url": "https://itbook.store/books/9781491980255"
            },
            {
                "id": 250,
                "title": "Designing Distributed Systems",
                "subtitle": "Patterns and Paradigms for Scalable, Reliable Services",
                "isbn13": "9781491983645",
                "price": "$27.01",
                "image": "https://itbook.store/img/books/9781491983645.png",
                "url": "https://itbook.store/books/9781491983645"
            },
            {
                "id": 251,
                "title": "Visualizing Streaming Data",
                "subtitle": "Interactive Analysis Beyond Static Limits",
                "isbn13": "9781492031857",
                "price": "$30.69",
                "image": "https://itbook.store/img/books/9781492031857.png",
                "url": "https://itbook.store/books/9781492031857"
            },
            {
                "id": 252,
                "title": "Building an Anonymization Pipeline",
                "subtitle": "Creating Safe Data",
                "isbn13": "9781492053439",
                "price": "$36.65",
                "image": "https://itbook.store/img/books/9781492053439.png",
                "url": "https://itbook.store/books/9781492053439"
            },
            {
                "id": 253,
                "title": "AI-First Healthcare",
                "subtitle": "AI Applications in the Business and Clinical Management of Health",
                "isbn13": "9781492063155",
                "price": "$42.73",
                "image": "https://itbook.store/img/books/9781492063155.png",
                "url": "https://itbook.store/books/9781492063155"
            },
            {
                "id": 254,
                "title": "101 Design Ingredients to Solve Big Tech Problems",
                "subtitle": "",
                "isbn13": "9781937785321",
                "price": "$22.89",
                "image": "https://itbook.store/img/books/9781937785321.png",
                "url": "https://itbook.store/books/9781937785321"
            },
            {
                "id": 255,
                "title": "Thinking Ahead",
                "subtitle": "Essays on Big Data, Digital Revolution, and Participatory Market Society",
                "isbn13": "9783319150772",
                "price": "$19.99",
                "image": "https://itbook.store/img/books/9783319150772.png",
                "url": "https://itbook.store/books/9783319150772"
            },
            {
                "id": 256,
                "title": "Operating Systems: From 0 to 1",
                "subtitle": "",
                "isbn13": "1001606140658",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/1001606140658.png",
                "url": "https://itbook.store/books/1001606140658"
            },
            {
                "id": 257,
                "title": "HackSpace Magazine: Issue 45",
                "subtitle": "August 2021",
                "isbn13": "1001629809404",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/1001629809404.png",
                "url": "https://itbook.store/books/1001629809404"
            },
            {
                "id": 258,
                "title": "Just Enough R",
                "subtitle": "Learn Data Analysis with R in a Day",
                "isbn13": "1001630936364",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/1001630936364.png",
                "url": "https://itbook.store/books/1001630936364"
            },
            {
                "id": 259,
                "title": "Computer Networks",
                "subtitle": "A Systems Approach",
                "isbn13": "9780128182000",
                "price": "$48.30",
                "image": "https://itbook.store/img/books/9780128182000.png",
                "url": "https://itbook.store/books/9780128182000"
            },
            {
                "id": 260,
                "title": "Advanced Game Design",
                "subtitle": "A Systems Approach",
                "isbn13": "9780134667607",
                "price": "$31.59",
                "image": "https://itbook.store/img/books/9780134667607.png",
                "url": "https://itbook.store/books/9780134667607"
            },
            {
                "id": 261,
                "title": "Improving Agile Retrospectives",
                "subtitle": "Helping Teams Become More Efficient",
                "isbn13": "9780134678344",
                "price": "$27.99",
                "image": "https://itbook.store/img/books/9780134678344.png",
                "url": "https://itbook.store/books/9780134678344"
            },
            {
                "id": 262,
                "title": "SQL Server 2019 Administration Inside Out",
                "subtitle": "",
                "isbn13": "9780135561089",
                "price": "$50.28",
                "image": "https://itbook.store/img/books/9780135561089.png",
                "url": "https://itbook.store/books/9780135561089"
            },
            {
                "id": 263,
                "title": "A Network Architect&#039;s Guide to 5G",
                "subtitle": "",
                "isbn13": "9780137376841",
                "price": "$59.99",
                "image": "https://itbook.store/img/books/9780137376841.png",
                "url": "https://itbook.store/books/9780137376841"
            },
            {
                "id": 264,
                "title": "Getting Started with Greenplum for Big Data Analytics",
                "subtitle": "A hands-on guide on how to execute an analytics project from conceptualization to operationalization using Greenplum",
                "isbn13": "9781782177043",
                "price": "$23.99",
                "image": "https://itbook.store/img/books/9781782177043.png",
                "url": "https://itbook.store/books/9781782177043"
            },
            {
                "id": 265,
                "title": "Pig Design Patterns",
                "subtitle": "Simplify Hadoop programming to create complex end-to-end Enterprise Big Data solutions with Pig",
                "isbn13": "9781783285556",
                "price": "$28.26",
                "image": "https://itbook.store/img/books/9781783285556.png",
                "url": "https://itbook.store/books/9781783285556"
            },
            {
                "id": 266,
                "title": "Learning Apache Mahout",
                "subtitle": "Acquire practical skills in Big Data Analytics and explore data science with Apache Mahout",
                "isbn13": "9781783555215",
                "price": "$35.99",
                "image": "https://itbook.store/img/books/9781783555215.png",
                "url": "https://itbook.store/books/9781783555215"
            },
            {
                "id": 267,
                "title": "Apache Hive Essentials",
                "subtitle": "Immerse yourself on a fantastic journey to discover the attributes of big data by using Hive",
                "isbn13": "9781783558575",
                "price": "$23.99",
                "image": "https://itbook.store/img/books/9781783558575.png",
                "url": "https://itbook.store/books/9781783558575"
            },
            {
                "id": 268,
                "title": "Big Data Forensics: Learning Hadoop Investigations",
                "subtitle": "Perform forensic investigations on Hadoop clusters with cutting-edge tools and techniques",
                "isbn13": "9781785288104",
                "price": "$35.99",
                "image": "https://itbook.store/img/books/9781785288104.png",
                "url": "https://itbook.store/books/9781785288104"
            },
            {
                "id": 269,
                "title": "Hands-On Big Data Modeling",
                "subtitle": "Effective database design techniques for data architects and business intelligence professionals",
                "isbn13": "9781788620901",
                "price": "$39.99",
                "image": "https://itbook.store/img/books/9781788620901.png",
                "url": "https://itbook.store/books/9781788620901"
            },
            {
                "id": 270,
                "title": "Cloud Analytics with Google Cloud Platform",
                "subtitle": "An End-To-end Guide to Processing and Analyzing Big Data Using Google Cloud Platform",
                "isbn13": "9781788839686",
                "price": "$36.98",
                "image": "https://itbook.store/img/books/9781788839686.png",
                "url": "https://itbook.store/books/9781788839686"
            },
            {
                "id": 271,
                "title": "Apache Hadoop 3 Quick Start Guide",
                "subtitle": "Learn about big data processing and analytics",
                "isbn13": "9781788999830",
                "price": "$29.99",
                "image": "https://itbook.store/img/books/9781788999830.png",
                "url": "https://itbook.store/books/9781788999830"
            },
            {
                "id": 272,
                "title": "Machine Learning with Apache Spark Quick Start Guide",
                "subtitle": "Uncover patterns, derive actionable insights, and learn from big data using MLlib",
                "isbn13": "9781789346565",
                "price": "$29.99",
                "image": "https://itbook.store/img/books/9781789346565.png",
                "url": "https://itbook.store/books/9781789346565"
            },
            {
                "id": 273,
                "title": "Apache Spark 2: Data Processing and Real-Time Analytics",
                "subtitle": "Master complex big data processing, stream analytics, and machine learning with Apache Spark",
                "isbn13": "9781789959208",
                "price": "$49.99",
                "image": "https://itbook.store/img/books/9781789959208.png",
                "url": "https://itbook.store/books/9781789959208"
            },
            {
                "id": 274,
                "title": "Next-Generation Big Data",
                "subtitle": "A Practical Guide to Apache Kudu, Impala, and Spark",
                "isbn13": "9781484231463",
                "price": "$33.51",
                "image": "https://itbook.store/img/books/9781484231463.png",
                "url": "https://itbook.store/books/9781484231463"
            },
            {
                "id": 275,
                "title": "Veracity of Big Data",
                "subtitle": "Machine Learning and Other Approaches to Verifying Truthfulness",
                "isbn13": "9781484236321",
                "price": "$29.99",
                "image": "https://itbook.store/img/books/9781484236321.png",
                "url": "https://itbook.store/books/9781484236321"
            },
            {
                "id": 276,
                "title": "Machine Learning and AI for Healthcare",
                "subtitle": "Big Data for Improved Health Outcomes",
                "isbn13": "9781484237984",
                "price": "$30.17",
                "image": "https://itbook.store/img/books/9781484237984.png",
                "url": "https://itbook.store/books/9781484237984"
            },
            {
                "id": 277,
                "title": "Understanding Azure Data Factory",
                "subtitle": "Operationalizing Big Data and Advanced Analytics Solutions",
                "isbn13": "9781484241219",
                "price": "$30.09",
                "image": "https://itbook.store/img/books/9781484241219.png",
                "url": "https://itbook.store/books/9781484241219"
            },
            {
                "id": 278,
                "title": "Great Big Agile",
                "subtitle": "An OS for Agile Leaders",
                "isbn13": "9781484242056",
                "price": "$34.51",
                "image": "https://itbook.store/img/books/9781484242056.png",
                "url": "https://itbook.store/books/9781484242056"
            },
            {
                "id": 279,
                "title": "SQL Server Big Data Clusters",
                "subtitle": "Data Virtualization, Data Lake, and AI Platform",
                "isbn13": "9781484259849",
                "price": "$33.58",
                "image": "https://itbook.store/img/books/9781484259849.png",
                "url": "https://itbook.store/books/9781484259849"
            },
            {
                "id": 280,
                "title": "Getting Structured Data from the Internet",
                "subtitle": "Running Web Crawlers/Scrapers on a Big Data Production Scale",
                "isbn13": "9781484265758",
                "price": "$36.49",
                "image": "https://itbook.store/img/books/9781484265758.png",
                "url": "https://itbook.store/books/9781484265758"
            },
            {
                "id": 281,
                "title": "Spark: The Definitive Guide",
                "subtitle": "Big Data Processing Made Simple",
                "isbn13": "9781491912218",
                "price": "$27.99",
                "image": "https://itbook.store/img/books/9781491912218.png",
                "url": "https://itbook.store/books/9781491912218"
            },
            {
                "id": 282,
                "title": "Storm Blueprints: Patterns for Distributed Real-time Computation",
                "subtitle": "Use Storm design patterns to perform distributed, real-time big data processing, and analytics for real-world use cases",
                "isbn13": "9781782168294",
                "price": "$24.99",
                "image": "https://itbook.store/img/books/9781782168294.png",
                "url": "https://itbook.store/books/9781782168294"
            },
            {
                "id": 283,
                "title": "Talend for Big Data",
                "subtitle": "Access, transform, and integrate data using Talend's open source, extensible tools",
                "isbn13": "9781782169499",
                "price": "$20.99",
                "image": "https://itbook.store/img/books/9781782169499.png",
                "url": "https://itbook.store/books/9781782169499"
            },
            {
                "id": 284,
                "title": "Big Data Now: 2012 Edition",
                "subtitle": "Current Perspectives from O'Reilly Media",
                "isbn13": "9781449356682",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/9781449356682.png",
                "url": "https://itbook.store/books/9781449356682"
            },
            {
                "id": 285,
                "title": "Learning Spark",
                "subtitle": "Lightning-Fast Big Data Analysis",
                "isbn13": "9781449358624",
                "price": "$32.23",
                "image": "https://itbook.store/img/books/9781449358624.png",
                "url": "https://itbook.store/books/9781449358624"
            },
            {
                "id": 286,
                "title": "Real-Time Big Data Analytics",
                "subtitle": "Emerging Architecture",
                "isbn13": "9781449364212",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/9781449364212.png",
                "url": "https://itbook.store/books/9781449364212"
            },
            {
                "id": 287,
                "title": "Disruptive Possibilities",
                "subtitle": "How Big Data Changes Everything",
                "isbn13": "9781449369002",
                "price": "$0.00",
                "image": "https://itbook.store/img/books/9781449369002.png",
                "url": "https://itbook.store/books/9781449369002"
            },
            {
                "id": 288,
                "title": "Big Data Made Easy",
                "subtitle": "A Working Guide to the Complete Hadoop Toolset",
                "isbn13": "9781484200957",
                "price": "$44.52",
                "image": "https://itbook.store/img/books/9781484200957.png",
                "url": "https://itbook.store/books/9781484200957"
            },
            {
                "id": 289,
                "title": "Beginning Big Data with Power BI and Excel 2013",
                "subtitle": "",
                "isbn13": "9781484205303",
                "price": "$18.76",
                "image": "https://itbook.store/img/books/9781484205303.png",
                "url": "https://itbook.store/books/9781484205303"
            },
            {
                "id": 290,
                "title": "Big Data Analytics with Spark",
                "subtitle": "A Practitioner's Guide to Using Spark for Large Scale Data Analysis",
                "isbn13": "9781484209653",
                "price": "$29.99",
                "image": "https://itbook.store/img/books/9781484209653.png",
                "url": "https://itbook.store/books/9781484209653"
            },
            {
                "id": 291,
                "title": "Building Your Next Big Thing with Google Cloud Platform",
                "subtitle": "A Guide for Developers and Enterprise Architects",
                "isbn13": "9781484210055",
                "price": "$41.74",
                "image": "https://itbook.store/img/books/9781484210055.png",
                "url": "https://itbook.store/books/9781484210055"
            },
            {
                "id": 292,
                "title": "The Definitive Guide to MongoDB, 3rd Edition",
                "subtitle": "A complete guide to dealing with Big Data using MongoDB",
                "isbn13": "9781484211830",
                "price": "$49.99",
                "image": "https://itbook.store/img/books/9781484211830.png",
                "url": "https://itbook.store/books/9781484211830"
            },
            {
                "id": 293,
                "title": "Complete Guide to Open Source Big Data Stack",
                "subtitle": "",
                "isbn13": "9781484221488",
                "price": "$30.77",
                "image": "https://itbook.store/img/books/9781484221488.png",
                "url": "https://itbook.store/books/9781484221488"
            }
        ]
    }
];


module.exports = {
    livros
}
