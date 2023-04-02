import flask
from flask import Flask, render_template, request, redirect, send_from_directory
from discord_webhook import DiscordWebhook, DiscordEmbed

app = Flask(__name__)

url = "https://discord.com/api/webhooks/1092031413710241853/rM5mV7WVR04XTEHwJjBaFpCRLJOZV2aDMb56aWS1A5cmINn0n9uoNh1jKh-d8usOMUhS"

webhook = DiscordWebhook(url=url)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/send', methods=["POST"])
def send():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")
        embed = DiscordEmbed(title=f"Name: {name}", description='Message From Portfolio', color='03b2f8')
        embed.add_embed_field(name="Email", value=email, inline=False)
        embed.add_embed_field(name="Message", value=message)
        webhook.add_embed(embed)
        webhook.execute()
        return redirect("/")
        

if __name__ == '__main__':
    app.run(host="localhost", port="8080", debug=True)