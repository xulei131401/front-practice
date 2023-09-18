<template>
</template>

<script>
    import CryptoJS from 'crypto-js';
    // import { Base64 } from 'js-base64';
    import {encryptByAES,decryptByAES} from './encryp'

    export default {
        data() {
            return {}
        },
        mounted() {
            const ddd = {
                AdminPosition: {
                    LIST: [
                        {value:"110", label:"招商经理"},
                        {value:"111", label:"招商组长"},
                        {value:"112", label:"招商总监"},
                        {value:"113", label:"数据处理人员"}
                    ],
                    isSalesManager(val){
                        console.log("this:", this)
                        console.log("this1:", ddd.AdminPosition)
                        return Number(val) === 112;
                    },
                    isAdmin(val){
                        return Number(val) === 100;
                    }
                },
                AdminSalesGroup: {
                    LIST: [
                        {value:"1", label:"招商一组"},
                        {value:"2", label:"招商二组"},
                    ]
                },
            };

            ddd.AdminPosition.isSalesManager(111);



            // var text = "xl123456?";
            // console.log("加密：", encryptByAES(text));
            // console.log("解密：", decryptByAES(encryptByAES(text)));


            // this.validate((valid) => {})
            // let tmp = {
            //     is_remove: 0
            // };
            //
            // console.log("ASdasd:", tmp.hasOwnProperty('is_remove'))
            //
            // let result = tmp.is_remove == '' && Number(tmp.is_remove) === 0
            // console.log("result:", result)


            /*const date = new Date();
            date.setHours(date.getHours() + 1);
            const policyText = {
                expiration: date.toISOString(), // 设置policy过期时间。
                conditions: [
                    // 限制上传大小。
                    ["content-length-range", 0, 100 * 1024 * 1024],
                ],
            };

            const credentials = {
                AccessKeyId: "STS.NTYHTj1EYcsvWBeodP2FhtGAb",
                AccessKeySecret: "x2uymSjfPfM77oiLUPWFXKxaMdxUd1YEGSbLeFgwwbr",
                SecurityToken: ""
            }
            const policy = Base64.encode('{"expiration":"2020-12-28T09:43:37Z","conditions":[["content-length-range",0,1073741824]]}')
            const signature = this.computeSignature(credentials.AccessKeySecret, policy)
            console.log("policy", policy)
            console.log("signature", signature)*/
        },
        methods: {
            computeSignature(accessKeySecret, canonicalString) {
                console.log("hmac:", crypto.HmacSHA1(canonicalString, accessKeySecret).toString())
                return crypto.enc.Base64.stringify(crypto.HmacSHA1(canonicalString, accessKeySecret));
            },
            validate() {},
        }
    }
</script>