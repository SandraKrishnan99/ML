<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="showbook.php" method="POST">
        <center><h2>Add Books</h2></center>
        <input type='text' placeholder='Access_No' name="Access_No" id="">
        <input type='text' placeholder='Title' name="Title" id="">
        <input type='text' placeholder='Author' name="Author" id="">
        <input type='text' placeholder='Edition' name="Edition" id="">
        <input type='text' placeholder='Publisher' name="Publisher" id="">
        <button type="submit">ADD</button>
    </form>
    <a href="showbook.php">View Books</a>
    <form>
        <input type='text' placeholder='Name of the book'>
        <button>SEARCH</button>
</form>
</body>
</html>