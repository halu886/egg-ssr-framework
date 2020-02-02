<template>
    <div class="main-header">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
    </div>
</template>
<style lang="less">
    .main-header{
        padding: 10px;
        &>div{
            display: inline-block;
            width: 200px;
            line-height: 40px;
            background: red;
            text-align: center;

            &:nth-child(n+3),&:nth-child(n+4){
                float: right;
            }
        }
    }
</style>