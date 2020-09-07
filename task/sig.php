<?php
header('Content-type: application/json;charset=utf-8');
$alg_arr=array('sha1','sha256','md5');
$alg=@$_POST['alg'];
if($alg==NULL||!in_array($alg, $alg_arr)){
        $alg='sha1';
}
$appKey = "1575874525000026";
$secretKey = "8c80157c9bcc5b3187af1e4775e6a6b1";
$timestamp=floor(microtime(1)*1000); //タイムスタンプを設定する。（形式例：111111111111111111）
$rs=json_encode(array('timestamp'=>(string)$timestamp,'sig'=>hash($alg,$appKey . $timestamp . $secretKey)));
die($rs);//暗号化処理したタイムスタンプとアルゴリズムを処理した署名文字列をjsonデータ形式に変換する
?>