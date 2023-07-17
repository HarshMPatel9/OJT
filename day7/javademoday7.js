<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Javascript</title>
</head>
<script type="text/javascript">
    function demoInternalAlert()
    {
        alert("Internal Alert");

    }
    function demoInternalConfirm()
    {
        if(confirm("Are you sure..??")){
            alert("yess")
        }
        else{
            alert("no")
        }
    }
    function demoInternalPrompt(){
        var fName=prompt("Enter Firstname Here..");
        var lName=prompt("Enter Lastname Here..");
        alert(fName+" "+lName);
    }
    function bodyBGGreen(){
        document.body.style.backgroundColor="Green";
    }
    function divBGGray(){
        document.getElementById("D1").style.backgroundColor="Gray";
    }

    function divBGDynamic(){
        document.getElementById("D1").style.backgroundColor=prompt("Enter color name here..");
    }
    function bodyBGDynamic(){
        document.body.style.backgroundColor=prompt("Enter color name here..");
    }

    function bodyBGCP1(){
        document.body.style.backgroundColor=document.getElementById("CP1").value;
    }
    function divBGCP2(){
        document.getElementById("D1").style.backgroundColor=document.getElementById("CP2").value;
    }
</script>
<script src="./script.js" type="text/javascript"></script>

		<style>
			body{background-color: rgb(22, 84, 13);}
			div{background-color: red;height: 300px;width: 300px;}
            button{color: burlywood;}
            input{color: cadetblue;}

		</style>
<body>
    <div id="D1">
        hello Dhvanit
    </div>
    <input type="button" value="Alert Inline" onclick="alert('Hello Guys')" />&nbsp;&nbsp;
    <input type="button" value="Confirm Inline" onclick="confirm('Are You Sure..??')" />&nbsp;&nbsp;
		<input type="button" value="Prompt Inline" onclick="prompt('Enter Firstname Here..')" />&nbsp;&nbsp;
		<hr/>
        <button onclick="demoInternalAlert()" >Alert Internal</button>&nbsp;&nbsp;
        <button onclick="demoInternalConfirm()">Confirm Internal</button>&nbsp;&nbsp; 
        <button onclick="demoInternalPrompt()">Prompt Internal</button>&nbsp;&nbsp;
        <hr>
        <button onclick="demoExtranalalart()">Alert Internal</button>&nbsp;&nbsp;
        <button onclick="demoExtranalConfirm()">Confirm Internal</button>&nbsp;&nbsp; 
        <button onclick="demoExtranalprompt()">Prompt Internal</button>&nbsp;&nbsp;
        <hr>
        <button onclick="bodyBGGreen()">Body bg green</button>
        <button onclick="divBGGray()">div bg Gray</button>
        <hr>
        <button onclick="bodyBGDynamic()">body Bg promot</button>
        <button onclick="divBGDynamic()"> div Bg promot</button>
        <hr>
        <input type="color" id="CP1" onchange="bodyBGCP1()" />&nbsp;&nbsp;
		<input type="color" id="CP2" onchange="divBGCP2()" />&nbsp;&nbsp;

</body>
</html>