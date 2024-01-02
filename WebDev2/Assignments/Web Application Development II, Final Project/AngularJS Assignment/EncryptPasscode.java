import java.security.MessageDigest;

public class EncryptPasscode {
    public static void main(String[] args) {
        String passcode = Password.Password();
        String algorithm = "SHA";

        byte[] plainText = passcode.getBytes();

        try {
            MessageDigest digest = MessageDigest.getInstance(algorithm);
            digest.reset();
            digest.update(plainText);
            byte[] encodedPasscode = digest.digest();

            StringBuilder builder = new StringBuilder();
            for (byte b : encodedPasscode) {
                if ((b & 0xff) < 0x10) {
                    builder.append("0");
                }
                builder.append(Long.toString(b & 0xff, 16));
            }

            System.out.println("Plain    : " + passcode);
            System.out.println("Encrypted: " + builder.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
