package veterinerapp.enums;

public enum Message {

    /** GENERAL */
    SUCCESS("SUCCESS", "İşlem Başarılı"),
    BAD_REQUEST("BAD_REQUEST", "Hatalı istek."),
    FORBIDDEN("FORBIDDEN", "Erişim engellendi."),
    UNAUTHORIZED("UNAUTHORIZED", "Yetkisiz giriş."),
    NOT_FOUND("NOT_FOUND", "Bulunamadı."),
    SYSTEM_ERROR("SYSTEM_ERROR", "Sistem hatası."),
    BAD_CREDENTIALS("BAD_CREDENTIALS", "E-posta adresi veya şifre hatalı."),


    /** USER SERVICE */
    USER_NOT_FOUND("USER_NOT_FOUND", "Kullanıcı bulunamadı."),
    USERNAME_ALREADY_EXISTS("EMAIL_ALREADY_EXISTS", "Sisteme kayıtlı bir mail adresi kullanamazsınız."),
    PASSWORDS_NOT_MATCH("PASSWORDS_NOT_MATCH","Şifre uyuşmamaktadır."),



    /** ANIMAL_SERVICE **/

    ANIMAL_ALREADY_EXISTS("ANIMAL_ALREADY_EXISTS","Sistemde var olan bir hayvanı ekleyemezsiniz."),
    ANIMAL_NOT_FOUND("ANIMAL_NOT_FOUND","Hayvan bulunamadı."),

    /** TREATMENT_SERVİCE */
    TREATMENT_NOT_FOUND("TREATMENT_NOT_FOUND","Tedavi bulunamadı."),
    /** FILE_SERVICE */
    FILE_NOT_FOUND("FILE_NOT_FOUND", "Silinecek dosya bulunamadı."),
    FILE_TYPE_NOT_ACCEPTABLE("FILE_TYPE_NOT_ACCEPTABLE", "Bu dosya tipi kabul edilemiyor.");



    private final String text;
    private final String desc;

    Message(final String text, final String desc) {
        this.text = text;
        this.desc = desc;
    }

    @Override
    public String toString() {
        return text;
    }

    public String getDesc() {
        return desc;
    }

    public String getDescWithExtraMessage(String extraMessage) {
        return desc + " " + extraMessage;
    }
}