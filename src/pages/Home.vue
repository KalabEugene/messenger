<template>
   <div>
    <div class="image__box"><img class="background__profile" src="https://klike.net/uploads/posts/2020-01/1579682557_22.jpg"></div> 
    <main>
      <div class="main__container">
        <div class="popular__posts">
            <h3>Popular posts</h3>
        </div>
        <div class="main__tape"></div>
        <div class="box__friends">
            <h3>Friends</h3>
        </div>
      </div>
    </main>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
  .image__box{
    width: 100%;
    max-height: 350px;
  }
  .background__profile{
    width: 100%;
    max-height: 350px;
     
  }
  .main__container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #d5f2f8;
    padding-top: 20px;
  }
  .popular__posts{
    width: 300px;
    min-height: 450px;
    background-color: #ecf3f5;
    box-shadow: 0 0 10px 5px #b6d8df;
    margin: 0 10px;
    padding: 20px 20px;
    color: #6E3CBC;
    font-family: 'Dosis', sans-serif;
    font-weight: 500;
  }
  .box__friends{
    width: 300px;
    min-height: 450px;
    background-color: #ecf3f5;
    box-shadow: 0 0 10px 5px #b6d8df;
    margin: 0 10px;
    padding: 20px 20px;
    color: #6E3CBC;
    font-family: 'Dosis', sans-serif;
  }
  .main__tape{
    width: 900px;
    min-height:500px;
    transform: translateY(-100px);
    background-color: #ecf3f5;
    box-shadow: 0 0 5px 5px #b6d8df;
    margin: 0 10px;
    padding: 20px 20px;
    color: #6E3CBC;
    font-family: 'Dosis', sans-serif;

  }

</style>