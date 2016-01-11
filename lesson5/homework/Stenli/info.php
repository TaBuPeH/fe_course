<?php


switch($_GET['type'])
{
	case 'coffee':
	{
		$result = array(0=>array('name'=>'Black Coffee', 'price'=>0.3),
				1=>array('name'=>'Latte', 'price'=>0.5),
				2=>array('name'=>'Black Coffee with Cream', 'price'=>0.4),
				3=>array('name'=>'Tea', 'price'=>0.35),
				4=>array('name'=>'Chicken Soup', 'price'=>0.8)
				
		);
		echo json_encode($result);
	}break;
	
	case 'gallery':
	{
		if(!isset($_GET['id']))
		{
			$_GET['id'] = rand(1,6);
		}
		
		echo "<img src='".$_GET['id'].".jpg'>";
	}break;
	
	case 'lottery':
	{
		$result = rand(1,49);
		echo $result;
	}break;
			
}