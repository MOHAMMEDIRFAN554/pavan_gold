$urls = @{
    "hero-jewelry.jpg" = "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop";
    "rings.jpg" = "https://images.unsplash.com/photo-1605100804763-ebea24d0840c?q=80&w=2070&auto=format&fit=crop";
    "necklaces.jpg" = "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2070&auto=format&fit=crop";
    "earrings.jpg" = "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070&auto=format&fit=crop";
    "bracelets.jpg" = "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop";
    "special-offer.jpg" = "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2070&auto=format&fit=crop";
    "gold-investment.jpg" = "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=2070&auto=format&fit=crop";
    "craftsmanship.jpg" = "https://images.unsplash.com/photo-1617038224538-58754a66769b?q=80&w=2070&auto=format&fit=crop"
}

foreach ($name in $urls.Keys) {
    Write-Host "Downloading $name..."
    try {
        Invoke-WebRequest -Uri $urls[$name] -OutFile "e:/Next js/pavan-gold/public/images/$name" -ErrorAction Stop
        Write-Host "Successfully downloaded $name"
    } catch {
        Write-Host "Failed to download $name : $_"
    }
}
