
<template>
   <div class="container">
        <table id="Tabla" class="table table-light table-hover">
            <thead class="thead-light">
                <tr>
                    <th>ID</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Telefono</th>
                    <th>Email</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
               <tr>
                    <td>1</td>
                    <td>Pelon</td>
                    <td>Triste</td>
                    <td>9901-2312</td>
                    <td>pelon@gmail.com</td>
                    <td>12</td>
               </tr>
               <tr>
                    <td>2</td>
                    <td>Benjamin</td>
                    <td>Martinez</td>
                    <td>8872-1321</td>
                    <td>benjamin@gmail.com</td>
                    <td>24</td>
               </tr>
               <tr>
                    <td>3</td>
                    <td>Oscar</td>
                    <td>Acosta</td>
                    <td>8812-3412</td>
                    <td>oscar@gmail.com</td>
                    <td>33</td>
               </tr>
            </tbody>
        </table>

        <div>
            <button id="Siguiente" class="btn btn-primary" style="">
                Siguiente
            </button>
        </div>
   </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
</script>

<style>
    body{
        background: white;
        color: black;
    }
</style>