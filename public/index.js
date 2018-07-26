// // $.ajax({
// //     url: `/users/addUsers?_id=111`,
// //     type: "get",
// //     success: (data) => {
// //         const { userPhone } = data[1]
// //         console.log(typeof userPhone)
// //     }
// //   })
// // db.user.insert({"userAcount":"123","userPwd":"123","userPhone":"123","userMail":"123","userName":"123","userType":"0","userStatus":"0"})

//     $.ajax({
//       url: `/users/addUsers`,
//       type: "post",
//       data:{"userAcount":"123",
//       "userPwd":"123",
//       "userPhone":123,
//       "userMail":"123",
//       "userName":"123",
//       "userType":0,
//       "userStatus":0}
//       ,
//       success: (data) => {
//         const { _id } = data
//         console.log(data)
//         das(_id)
//       }
//     })

//     function das(u_id){
//       $.ajax({
//         url: `/users/mendian`,
//         type: "post",
//         data:{
//         "shopName":"123",
//         "shopLicenceNum":"123",
//         "shopLicenceImg":"123",
//         "shopAdd":"123",
//         "shopLocation":"123",
//         "shopCorporate":"0",
//         "shopTel":123,
//         "shopImg":"123/sdas/das",
//         "shopFeature":"特殊服务",
//          u_id
//       },
//         success: (data) => {
//           console.log(data)
//           sp(data)
//           fw(data)
//           cw(data)
//         }
//       })
//     }

//     function cw(cw_id){
//       $.ajax({
//         url: `/users/chongwu`,
//         type: "post",
//         data:{
//         "chongwuName":"das",
//         "chongwuName":"dsa",
//         "chongwuKind":"dasss",
//         "chongwuColor":"dascd",
//         "chongwuData":"122323",
//         "chongwuStyle":"xiaren",
//         cw_id
//     }
//         ,
//         success: (data) => {
       
//         }
//       })
//     }

//     function sp(sp_id){
//       $.ajax({
//         url: `/users/shangpin`,
//         type: "post",
//         data:{
//         "goodsName":"123",
//         "goodsType":"123",
//         "goodsMaterial":"123",
//         "goodsCanFor":"123",
//         "goodsOnlyFor":"123",
//         "goodsSize":"0",
//         "goodsTaste":"123",
//         "goodsSpecial":"123/sdas/das",
//         "goodsRegion":"特殊服务",
//         "goodsDate":"特殊服务",
//         "goodsTime":"特殊服务",
//         "goodsSupplier":"特殊服务",
//         "goodsIntro":"特殊服务",
//         "goodsPrice":100000000000,
//         "goodsImg":"3/sdas/das",
//          sp_id
//       },
//         success: (data) => {

//         }
//       })
//     }
//     function fw(fw_id){
//       $.ajax({
//         url: `/users/fuwu`,
//         type: "post",
//         data:{
//         "serviceName":"123",
//         "serviceType":"123",
//         "serviceSchedule":"123",
//         "serviceCanFor":"123",
//         "serviceDetial":"123",
//         "serviceTime":"0",
//         "serviceLevel":"123",
//         "servicePrice":12321,
//         fw_id
//       },
//         success: (data) => {
//         }
//       })
//     }

