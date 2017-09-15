export default {
    aor: {
        action: {            
            delete: 'Sil',
            show: 'Göster',
            list: 'Listele',
            save: 'Kaydet',
            create: 'Oluştur',
            edit: 'Düzenle',
            cancel: 'İptal',
            refresh: 'Yenile',
            add_filter: 'Filtre ekle',
            remove_filter: 'Filtreyi kaldır',
            back: 'Geri Dön',
        },
        boolean: {
            true: 'Evet',
            false: 'Hayır',
        },
        page: {
            list: '%{name} listesi',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: '%{name} oluştur',
            delete: '%{name} #%{id} Sil',
            dashboard: 'Ana Sayfa',
            not_found: 'Sayfa bulunamadı',
        },
        input: {
            file: {
                upload_several:
                    'Yüklemek istediğiniz dosyaları buraya sürükleyin ya da seçmek için tıklayın.',
                upload_single: 'Yüklemek istediğiniz dosyayı buraya sürükleyin ya da seçmek için tıklayın..',
            },
            image: {
                upload_several: 'Yüklemek istediğiniz resimleri buraya sürükleyin ya da seçmek için tıklayın.',
                upload_single: 'Yüklemek istediğiniz resmi buraya sürükleyin ya da seçmek için tıklayın.'
            },
        },
        message: {
            yes: 'Evet',
            no: 'Hayır',
            are_you_sure: 'Emin misiniz?',
            about: 'Hakkında',
            not_found:
                'Hatalı bir URL girdiniz ya da yanlış bir linke tıkladınız',
        },
        navigation: {
            no_results: 'Kayıt bulunamadı',
            page_out_of_boundaries: '%{page} sayfası mevcut değil',
            page_out_from_end: 'Son sayfadan ileri gidemezsin',
            page_out_from_begin: '1. sayfadan geri gidemezsin',
            page_range_info: '%{offsetBegin}-%{offsetEnd} / %{total}',
            next: 'Sonraki',
            prev: 'Önceki',
        },
        auth: {
            username: 'Kullanıcı adı',
            password: 'Parola',
            sign_in: 'Giriş yap',
            sign_in_error: 'Giriş başarısız. Lütfen tekrar deneyin',
            logout: 'Çıkış',
        },
        notification: {
            updated: 'Öğe güncellendi',
            created: 'Öğe oluşturuldu',
            deleted: 'Öğe silindi',
            item_doesnt_exist: 'Öğe bulunamadı',
            http_error: 'Sunucu iletişim hatası',
        },
        validation: {
            required: 'Zorunlu alan',
            minLength: 'En az %{min} karakter',
            maxLength: 'En fazla %{max} karakter',
            minValue: 'En az %{min} olmalı',
            maxValue: 'En fazla %{max} olmali',
            number: 'Sayısal bir değer olmalı',
            email: 'E-posta geçerli değil',
        },
    },
};
