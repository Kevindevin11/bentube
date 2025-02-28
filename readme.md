# Ben-Tube (English)

Ben-Tube is a program developed to watch **Ben 10** directly from the terminal.

---

# Legal Disclaimer

This program does not host or store any video content. All videos are sourced from third-party video hosting websites. It is just a terminal based cli app.

If you own the copyright to any content listed by this program, please contact us at [valentari@proton.me] with the relevant links. Your request will be processed within **3 business days**.


## Usage

**Note:** Node.js, npm, and **VLC** or **Totem** are required. Videos can be played using VLC, Totem, or the default browser. VLC and browsers are supported on all platforms. By default, the program uses the default browser.

### Installation and Usage

For Linux-based devices, install VLC or Totem:

Example for Debian-based distributions:

```sh
sudo apt install vlc totem
npm i bentube
node ben.js
```

### For Android devices:

Download Termux and install Node.js and npm.

**VLC**
   
   You can download the official VLC version from the Google Play Store.
   Additionally, set VLC as the player by running:
   ```sh
   watch ?> set player vlc
   ```

### For Windows:

Download VLC from the store. If you encounter an error, ensure that VLC is installed in the following directory:

```
C:\Program Files\VideoLAN\VLC\vlc.exe
```

**Note:** If you get an error while playing a video or the video does not start, ensure that your selected video player is installed on your system. If it is not installed or you do not want to install it, choose a different player, such as the browser:
```sh
set player browser
```

Some videos do not have an English version. If unavailable, an error will occur.

To change the default language of videos, use the `-l` parameter:

```sh
node ben.js -l 0 # Turkish
node ben.js -l 1 # English
```

**Note:** The program starts with `0` (Turkish) as the default language.

### How to Watch

1. Select a series.
2. Enter the season number.
3. Enter the episode number.
4. Press Enter.

#### Navigation Commands
- Go back: `..`
- List items: `l`, `ls`, `list`
- Exit: `exit`, `e`

#### Watch Menu Commands
```sh
watch? > lang 0  # Turkish
watch? > lang 1  # English (Subtitled)
watch? > fav  # List favorites
watch? > add fav  # Add to favorites (Example: add fav)
watch? > del fav  # Remove from favorites (Example: del fav)
watch? > lang  # Show default language
watch? > set player <player>  # Set default player (vlc/totem)
watch? > set player browser  # Set default player to browser
watch? > set player totem  # Set player to Totem
watch? > set player vlc  # Set player to VLC
watch? > info  # Show episode information
watch? > ...  # Return to main menu
```

#### Main Menu Commands
```sh
choose series: go <series_no> <season_no> <episode_no>  # Directly play an episode (Example: go 0 1 1)
choose series: rand  # Play a random episode
choose series: fav  # List favorites
choose series: add fav <series_no> <season_no> <episode_no>  # Add to favorites
choose series: del fav <fav_no>  # Remove from favorites
```

### Example Usage
```sh
node ben.js
choose series: 0
Ben 10 Classic:Season>ls
Ben 10 Classic:Season>1
Ben 10 Classic:Season>1>Part>ls
Ben 10 Classic:Season>1>Part>1
╔════════════════════════════════════════════════════════════╗
║ (►◄)  1st Season  1st Episode  And Then There Were 10  27.12.2005 ║
╚════════════════════════════════════════════════════════════╝

watch? > ..
Ben 10 Classic:Season>1>Part>
```
github: https://github.com/anywany/bentube

thanks for using, report any thing to me: valentari@proton.me
---

# Ben-Tube (Türkçe)

Ben-Tube, terminal üzerinden **Ben 10** izlemek için geliştirilmiş bir programdır.

# Yasal Uyarı (Disclaimer)

Bu program, dizi bölümlerine doğrudan ev sahipliği yapmaz veya herhangi bir içeriği barındırmaz. Tüm videolar, üçüncü taraf video barındırma sitelerinden alınmaktadır. Ayrıca videolar ile ilgili bir ilişkimiz yoktur. Bu program sadece bir terminal tabanlı cli apptir.

Eğer telif hakkı size ait olan bir içerik program tarafından listeleniyorsa, lütfen **ilgili bağlantılar ile birlikte** [valentari@proton.me] üzerinden bizimle iletişime geçin. Talebiniz 3 iş günü içerisinde işleme alınacaktır.

**Not:** Programın çalışması için **Node.js**, **npm** ve **VLC** veya **Totem** gereklidir. Videolar VLC, Totem veya varsayılan tarayıcı kullanılarak oynatılabilir. VLC ve tarayıcı tüm platformlarda desteklenmektedir. Program, varsayılan olarak tarayıcınızı kullanır.

## Kurulum ve Kullanım

### Linux Tabanlı Sistemler
VLC veya Totem'i yükleyin:

Debian tabanlı dağıtımlar için:

```sh
sudo apt install vlc totem
npm i bentube
node ben.js
```

### Android Cihazlar
1. **Termux** uygulamasını indirin ve **Node.js** ile **npm**'i kurun.
2. VLC'yi Google Play Store'dan indirerek kullanabilirsiniz.
   
   VLC'yi oynatıcı olarak ayarlamak için:
   ```sh
   watch ?> set player vlc
   ```
### Windows Kullanıcıları
VLC'yi mağazadan indirin. Eğer hata alırsanız, VLC'nin şu dizinde olup olmadığını kontrol edin:

```
C:\Program Files\VideoLAN\VLC\vlc.exe
```

**Not:** Eğer video oynatma hatası alırsanız, seçili oynatıcının sisteminizde kurulu olduğundan emin olun. Alternatif olarak, **set player browser** komutuyla tarayıcıyı kullanabilirsiniz.

## İzleme Adımları

1. **Seri seçin.**
2. **Sezon numarasını girin.**
3. **Bölüm numarasını girin.**
4. **Enter tuşuna basarak izlemeye başlayın.**

### Navigasyon Komutları
- **Geri git:** `..`
- **Listeleme:** `l`, `ls`, `list`
- **Çıkış:** `exit`, `e`

### İzleme Menüsü Komutları
```sh
watch? >lang 0        # Türkçe
watch? >lang 1        # İngilizce (Altyazılı)
watch? >fav           # Favorileri listele
watch? >add fav       # Favorilere ekle
watch? >del fav       # Favorilerden kaldır
watch? >lang          # Varsayılan dili göster
watch? >set player vlc      # VLC oynatıcı olarak ayarla
watch? >set player totem    # Totem oynatıcı olarak ayarla
watch? >set player browser  # Tarayıcıyı oynatıcı olarak ayarla
watch? >info          # Bölüm bilgilerini göster
watch? >...          # Ana menüye dön
```

### Ana Menü Komutları
```sh
choose series: go <seri_no> <sezon_no> <bölüm_no>  # Doğrudan bölüme git
choose series: rand  # Rastgele bir bölüm oynat
choose series: fav   # Favorileri listele
choose series: add fav <seri_no> <sezon_no> <bölüm_no>  # Favorilere ekle
choose series: del fav <favori_no>  # Favorilerden kaldır
```

## Örnek Kullanım
```sh
node ben.js
choose series: 0
Ben 10 Classic:Season>ls
Ben 10 Classic:Season>1
Ben 10 Classic:Season>1>Part>ls
Ben 10 Classic:Season>1>Part>1
```

```
╔════════════════════════════════════════════════════════════╗
║ (►◄)  1. Sezon  1. Bölüm  "And Then There Were 10"  27.12.2005 ║
╚════════════════════════════════════════════════════════════╝
```

```sh
watch? >..
Ben 10 Classic:Season>1>Part>
```

## Özellikler

### Mevcut Özellikler
- **Tarayıcı** ile oynatma
- **VLC** ve **Totem** desteği
- **Dublaj/Altyazılı** dil seçimi
- **Kalite ayarı** (yalnızca tarayıcı modunda)

### Planlanan Özellikler
- **Video indirme desteği**

## Kullanılan Kütüphaneler

Program, aşağıdaki **Node.js** kütüphanelerini kullanmaktadır:
- `axios`, `qs` → HTTP/S istekleri için
- `table` → Terminalde tablo oluşturmak için
- `vlc` → VLC ile oynatma desteği
- `totem` → Totem ile oynatma desteği

## Lisans

Bu program **GPL v3** lisansı ile lisanslanmıştır.
Detaylı bilgi için: [GPL v3](https://www.gnu.org/licenses/gpl-3.0.txt)

**Sorumluluk Reddi:** Bu programın yanlış kullanımından doğabilecek sorunlardan sorumlu değilim. Tüm sorumluluk kullanıcıya aittir.

github: https://github.com/anywany/bentube

thanks for using, report any thing to me: valentari@proton.me
