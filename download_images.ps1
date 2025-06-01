# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "images"
New-Item -ItemType Directory -Force -Path "images/products"
New-Item -ItemType Directory -Force -Path "images/testimonials"

# Function to download image
function Download-Image {
    param (
        [string]$Url,
        [string]$FilePath
    )
    
    try {
        Invoke-WebRequest -Uri $Url -OutFile $FilePath
        Write-Host "Downloaded: $FilePath"
    }
    catch {
        Write-Host "Failed to download: $Url"
    }
}

# Download hero image
Download-Image -Url "https://images.unsplash.com/photo-1617038220319-276d3cfab638" -FilePath "images/hero-bg.jpg"
Download-Image -Url "https://images.unsplash.com/photo-1602752275197-9d317a1d4456" -FilePath "images/hero-traditional.jpg"

# Download product images
Download-Image -Url "https://images.unsplash.com/photo-1573408301185-9146fe634ad0" -FilePath "images/products/wedding-rings.jpg"
Download-Image -Url "https://images.unsplash.com/photo-1601821765780-754fa98637c1" -FilePath "images/products/gold-necklaces.jpg"
Download-Image -Url "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9" -FilePath "images/products/traditional-earrings.jpg"
Download-Image -Url "https://images.unsplash.com/photo-1611591437281-460bfbe1220a" -FilePath "images/products/gold-bracelets.jpg"

# Download featured product images
Download-Image -Url "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338" -FilePath "images/products/pearl-earrings.jpg"

# Download category images
Download-Image -Url "https://images.unsplash.com/photo-1605100804763-247f67b3557e" -FilePath "images/products/diamond-rings.jpg"
Download-Image -Url "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f" -FilePath "images/products/gold-bangles.jpg"
Download-Image -Url "https://images.unsplash.com/photo-1611591437281-460bfbe1220a" -FilePath "images/products/pearl-sets.jpg"

# Download new arrivals images
Download-Image -Url "https://images.unsplash.com/photo-1602752275197-9d317a1d4456" -FilePath "images/products/diamond-pendant.jpg"
Download-Image -Url "https://images.unsplash.com/photo-1603561591411-07134e71a2a9" -FilePath "images/products/emerald-ring.jpg"
Download-Image -Url "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584" -FilePath "images/products/pearl-bracelet.jpg"
Download-Image -Url "https://images.unsplash.com/photo-1599643477877-530eb83abc8e" -FilePath "images/products/sapphire-necklace.jpg"

# Download testimonial images
Download-Image -Url "https://images.unsplash.com/photo-1544005313-94ddf0286df2" -FilePath "images/testimonials/testimonial1.jpg"
Download-Image -Url "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" -FilePath "images/testimonials/testimonial2.jpg"
Download-Image -Url "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" -FilePath "images/testimonials/testimonial3.jpg" 