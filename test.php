<?php
	include ("connectDB.php");			
	$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD,DB_NAME)
		OR die ('Could not connect to MySQL: '.mysql_error());
				
	$sql1 = "SELECT U.uid AS uid, count(Q.uid) AS counter FROM question Q, user U where Q.uid = U.uid GROUP BY U.uid "
				
	$rs1 = mysqli_query ($conn,$sql);
				
	if (!$sql1) {
		echo mysql_error();
		die;
	}
				
	$data = array();
				
	for ($x = 0; $x < mysql_num_rows($sql1); $x++) {
		$data[] = mysql_fetch_assoc($sql1);
	}
					
	echo json_encode($data);
				
	mysql_close($conn);
?>
		
		