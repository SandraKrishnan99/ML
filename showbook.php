<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $conn=new mysqli("localhost","root","","library1");
        if(
            $conn->connect_error){
                die("Failed Connection");
            }   
            echo "Connected Succesfully"."</br>";
        class Books{
            function book($Access_No,$Title,$Author,$Edition,$Publisher){
                $this->$Access_No=$Access_No;
                $this->$Title=$Title;
                $this->$Author=$Author;
                $this->$Edition=$Edition;
                $this->$Publisher=$Publisher;
            } 
            function save(){
                GLOBAL $conn;

                $sql="INSERT INTO `books` VALUES ('$this->$Access_No','$this->$Title','$this->$Author','$this->$Edition','$this->$Publisher')";
                if($conn->query($sql)===TRUE){
                    echo"Record saved succesfully";
                    $this->display();
                }
                else{
                    $this->display();
                }
            } 
            function display(){
                GLOBAL $conn;

            $sql="SELECT * FROM `books`";
            $result=$conn->query($sql);
    ?>
    <table>
         <tr>
            <th>Access_No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Edition</th>
            <th>Publisher</th>
        </tr>
    <?php
            while($row=$result->fetch_assoc()){
                echo"<tr><td>".$row["Access_No"]."</td><td>".$row["Title"]."</td><td>".$row["Author"]."</td><td>".$row["Edition"]."</td><td>".$row["Publisher"]."</td></tr>";

            }
    ?>
    </table>
    <?php
            }
        }
        $accno=$_POST["Access_No"];
        $title=$_POST["Title"];
        $author=$_POST["Author"];
        $edi=$_POST["Edition"];
        $pub=$_POST["Publisher"];

             if(
                $conn->connect_error){
                    die("Failed Connection");
                }   
                else{
                   
                    $books=new Books($accno,$title,$author,$edi,$pub);
                    $books->save();
                    
                }
    ?>
</body>
</html>