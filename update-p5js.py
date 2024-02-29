import requests
import shutil

base_url = "https://api.github.com/repos/processing/p5.js/releases/latest"

response = requests.get(base_url)
data = response.json()

for asset in data['assets']:
    if asset['name'] in ['p5.js', 'p5.min.js', 'p5.sound.min.js']:
        url = asset['browser_download_url']
        filename = 'template/libraries/' + asset['name']
        r = requests.get(url, stream=True)
        if r.status_code == 200:
            with open(filename, 'wb') as f:
                r.raw.decode_content = True
                shutil.copyfileobj(r.raw, f)