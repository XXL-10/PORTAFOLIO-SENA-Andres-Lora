<?php require './inclu/header.php'; ?>
<main class="form">
  <form class="forms" method="POST" action="">
    <fieldset>
      <legend>Digite todos sus datos</legend>
      <div class="campos">
        <div class="campo">
          <label for="nombre"> Nombre</label>
          <input type="text" id="nombre" class="espacio" name="nombre" placeholder="Digite nombre completo" required autofocus />
        </div>
        <div class="campo">
          <label for="tel">Telefono</label>
          <input type="number" id="telefono" class="espacio" name="telefono" placeholder="+573#########" required />
        </div>
        <div class="campo">
          <label for="email">Email</label>
          <input type="text" id="email" class="espacio" name="email" placeholder="correo@correo.com" />
        </div>
        <div class="campo">
          <label for="men">Mensaje</label>
          <textarea name="mensaje" id="men" class="espacio"></textarea>
        </div>
        <input type="submit" class="btn" value="Enviar" />
      </div>
    </fieldset>
  </form>
</main>

<?php
require './conexion/conexion_bd.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $sql = "INSERT INTO formulario (nombre, telefono, correo, mensaje) 
            VALUES ('$nombre', '$telefono', '$email', '$mensaje')";

    $result_check = mysqli_query($conexion, $sql);

    if ($result_check) {
        echo "<script>alert('Usuario registrado exitosamente.'); window.location.href = 'contacto.php';</script>";
    } else {
        echo "Error: " . mysqli_error($conexion);
    }

    mysqli_close($conexion);
}

require './inclu/footer.php'; 
?>


