source ~/Documents/passwords/thaiorchid-konepaja.fi
hugo
lftp -c "open -u thaiorch,$PASSWORD ftp.thaiorchid-konepaja.fi; set ftp:ssl-allow no; set ssl:verify-certificate no; mirror -R public ~/public_html"
