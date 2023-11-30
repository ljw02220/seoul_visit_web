<?php
$score =98;
if($score>90) {
    $grade ="A";
} else if($score>=80) {
    $grade = "B";
} else if($score>=70) {
    $grade = "C";
}else if($score>=60){
    $grade = "D";
}else if($score>=80){
    $grade = "F";
}
?>
<!-- HTML 문서 -->
점수=<?=$score?>, 학점=<?=$grade?>