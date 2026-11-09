# Lab - An toan chuoi cung ung phan mem (SLSA/SBOM)

Repository thuc hanh rieng cho mon MNM, minh hoa 3 pipeline:

1. **SBOM**: Syft/Anchore tao `sbom.spdx.json` va `sbom.cyclonedx.json`; Grype quet lo hong va tao `grype-report.json`.
2. **Keyless signing**: Sigstore Cosign ky `release.tar.gz` bang OIDC cua GitHub Actions, xac minh chu ky va tai `release.tar.gz.sigstore.json` kem cac tep trich xuat `.sig`, `.pem`, `.sha256`.
3. **SLSA provenance**: Job `build` va reusable workflow `generator_generic_slsa3.yml` tao SLSA v1 provenance.

Source Node.js nho su dung Express; khoa phien ban dependency bang `package-lock.json`.

Luu y bao mat: action ngoai duoc pin bang commit SHA; GITHUB_TOKEN cap quyen rieng tung job. Grype duoc cau hinh `fail-build: false` chi cho muc dich thu thap bao cao (khong co nghia la ung dung an toan). Repo duoc tao private; SLSA generator su dung `private-repository: true` va cho phep dang tai metadata provenance len transparency log cong khai cua Sigstore.

Khong de khoa rieng, PAT hoac secret trong code.
