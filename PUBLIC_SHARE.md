# 🌐 How to Share Your Website Publicly

You can share your local development server with your friend using **ngrok**, which is already included in your project folder.

## Option 1: Share Your Local Server (Live Changes)
This is best if you want to show your friend changes **before** you save them to GitHub/Vercel.

1.  **Open two terminals** in your project folder.
2.  **In Terminal 1**, start your server:
    ```bash
    npm run dev:mobile
    ```
3.  **In Terminal 2**, start the public tunnel:
    ```bash
    npm run share
    ```
4.  **Copy the link**: Look for the line that says `Forwarding` in Terminal 2 (it will look like `https://xxxx-xxxx.ngrok-free.app`).
5.  **Send that link** to your friend!

> **Note:** If it is your first time using ngrok on this PC, you might need to run:
> `.\ngrok.exe config add-authtoken YOUR_TOKEN`
> (You can get a free token at [ngrok.com](https://dashboard.ngrok.com/get-started/your-authtoken))

---

## Option 2: Share the Permanent Link (Vercel)
If you have already pushed your updates to GitHub, you can just share your Vercel URL. This link is always online and doesn't require your computer to be on.

**Your Vercel Link:**
[https://hiiii-hexa.vercel.app](https://hiiii-hexa.vercel.app) 
*(Or your specific Vercel URL)*

---

## Which one should I use?
- Use **Option 1** if you are currently coding and want them to see things as you type.
- Use **Option 2** if you want them to have a link they can check anytime.
