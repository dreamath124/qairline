<script lang="js">

</script>

<template>
    <form>
        <input type="text" name="Arrival" id="arrival"><br>
        <input type="text" name="Des" id="Des."><br>
        <input type="date" name="FromDate" id="FromDate"><br>
        <input type="date" name="ToDate" id="ToDate"><br>
        <input class='green' type="submit" value="Submit">
    </form>
</template>

<style>
@import '../assets/base.css';
    input {
        width: 400px;
        height: 40px;
        border-radius: 5px;
        margin-bottom: 5px;
        font-size: large;
    }
    input[type=submit] {
        background-color: var(--vt-c-white);
    }
</style>