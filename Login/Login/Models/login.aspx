<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="login.aspx.vb" Inherits="Login.login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        #form1 {
            height: 402px;
            width: 839px;
            margin-left: 236px;
            margin-top: 2px; 
        }
    </style>
     <script language="JavaScript" type="text/javascript">
             function validar()
             {
                 var valida = true;
 
                 if (document.getElementById("TextBox1").value == "" || document.getElementById("Password1").value == "")
                 {
                     alert("Introduzca todos los datos");
                     valida = false;
                 }
 
                 return valida;
             }
        </script>
</head>
<body style="width: 1152px; height: 427px">
    <div>
    <form id="form1" runat="server" method="post">
        <asp:Panel ID="Panel1" runat="server" BackColor="#3C7FC5" Height="356px" style="margin-left: 39px" Width="760px">
            <br />
            <asp:Label ID="Label1" runat="server" Text="Iniciar Sesión" style="margin-left:40%;font-size: 30px"></asp:Label>
            <br />
            <asp:Label ID="Label2" runat="server" Text="Nombre Usuario:" style="margin-left:28%;margin-top:7%"></asp:Label><asp:TextBox ID="TextBox1" runat="server" style="margin-left:10%;margin-top:7%;height:30px;width:200px"></asp:TextBox>
            <asp:Image ID="Image2" runat="server" Height="52px" ImageUrl="~/Models/registro.png" Width="66px" />
            <br />
            <asp:Label ID="Label3" runat="server" Text="Contraseña:" style="margin-left:30%;margin-top:10%"/><input id="Password1" type="password" style="margin-left:13%;margin-top:2%;height:30px;width:200px"/>
            <asp:Image ID="Image1" runat="server" Height="52px" ImageUrl="~/Models/domain-password.png" style="margin-top: 0px; margin-bottom: 6px" Width="55px" />
            <br />
            <br />
            <asp:Label ID="Label4" runat="server" Text="¿Olvidaste la contraseña?" style="margin-left:30%;margin-top:40%"></asp:Label>
            <br />
            <input id="Button1" type="button" value="Crear Usuario" style="margin-left:30%;margin-top:7%" /><input id="Button2" type="button" value="Ingresar" OnClick="validar()" style="margin-left:30%;margin-top:7%"/>
            
        </asp:Panel>
        <br />
    </form>
        </div>
</body>
</html>
