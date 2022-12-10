import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
const s = serve({ port: 8080 });
console.log("http://localhost:8080/");
for await (const req of s) {
  if (req.url === "/login.html" && req.method === "POST") {
    // 處理表單請求
    const body = await Deno.readAll(req.body);
    const formData = new TextDecoder().decode(body);

    // 處理請求的資料...

    // 發送 HTTP 302 跳轉響應，將使用者重定向到主頁面
    req.respond({
      status: 302,
      headers: new Headers({
        Location: "/111010567webdesignMID.html",
      }),
    }
    )
  }
  }