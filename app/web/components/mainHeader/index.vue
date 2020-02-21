<template>
    <div class="main-header">
        <div>{{$root.headers[0]}}</div>
        <div>{{$root.headers[1]}}</div>
        <div>{{$root.headers[2]}}</div>
        <div>{{$root.headers[3]}}</div>
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