
$.ajax({
   /* 單純抓API資料 */
   url: "https://api.twitch.tv/kraken/streams/?client_id=taqgkzs6he7fw6opbsb1dqjvdz9gyu&game=League%20of%20Legends&limit=20",
   success: function (data) {
      $('#load').remove();
      handleData(data);

   },
   error: function (xhr, ajaxOptions, thrownError) {
      $('#load').remove();
      alert(xhr.status);
      alert(thrownError);
   }
});

function handleData(data) {
   //處理資料的函數
   for (let i = 0; i < data.streams.length; i++) {
      let preview_img = data.streams[i].preview.medium;
      // console.assert(preview_img, 'preview_img為空')
      let channel_logo = data.streams[i].channel.logo;
      // console.assert(channel_logo, i+ 'channel_logo為空' ,  data.streams[i].channel)
      let channel_status = data.streams[i].channel.status;
      // console.assert(channel_status, 'channel_status為空')
      let channel_name = data.streams[i].channel.name;
      // console.assert(channel_name, 'channel_name為空')


      $("#container").append(getHtml(preview_img, channel_logo, channel_status, channel_name));

   }

   $("#container").append(`<div class="item"></div>`);
   $("#container").append(`<div class="item"></div>`);
   $("#container").append(`<div class="item"></div>`);
}

function getHtml(preview_img, channel_logo, channel_status, channel_name) {
   return `<div class="item">
            <div class="preview"><img src="${preview_img}" alt=""></div>
            <div class="bottom">
               <div class="owner"><img src="${channel_logo}" alt=""></div>
               <div class="description">
                  <div class="channel">${channel_status}</div>
                  <div class="name">${channel_name}</div>
               </div>
            </div>
         </div>
         `;
}
