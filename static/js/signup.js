document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // 기본 제출 동작 방지

        // FormData 객체 생성
        const formData = new FormData();
        formData.append("id", document.getElementById("id").value);
        formData.append("pwd", document.getElementById("pwd").value);
        formData.append("name", document.getElementById("name").value);
        formData.append("phone", document.getElementById("phone").value);
        formData.append("email", document.getElementById("email").value);
        formData.append("type", document.querySelector('input[name="type"]:checked').value);

        // 이미지 파일 추가
        const imageInput = document.getElementById("profile-image");
        if (imageInput.files.length > 0) {
            formData.append("profile_image", imageInput.files[0]);
        }

        try {
            // fetch를 이용한 POST 요청
            const response = await fetch("/signin_done", {
                method: "POST",
                body: formData // FormData 객체를 전송
            });

            const finalUrl = response.url;

            if (finalUrl.includes("/login")) {
                alert("회원가입 성공!");
                window.location.href = finalUrl;
            } else if (finalUrl.includes("/signin")) {
                const result = await response.text();
                alert(`회원가입 실패: ${result}`);
            } else {
                alert("예상치 못한 응답입니다.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("서버 오류가 발생했습니다. 다시 시도해주세요.");
        }
    });
});
