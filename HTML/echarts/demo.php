<?php
$con = mysql_connect('localhost','root','123456');
if(!$con)
{
	die('error:'.mysql_error());
}
mysql_select_db("test",$con);
$result = mysql_query("select * from user where USERNAME='$_POST[username]'");
while($row = mysql_fetch_array($result))
{
	if($row['PWD'] == $_POST['password'])
	{
		echo 'success';
	}
	else
	{
		echo 'error';
	}
}
?>