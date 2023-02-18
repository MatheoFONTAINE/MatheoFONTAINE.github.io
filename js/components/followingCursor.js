const followingCursor = {
    init: function () {
        this.create();

        document.querySelector('.hide-following-cursor.hide').addEventListener('click', this.handleHideBtnClick);
        document.querySelector('.hide-following-cursor.show').addEventListener('click', this.handleShowBtnClick);
        document.querySelector('.hide-following-cursor.show').classList.add('hidden');

        console.log('Following cursor OK')
    },
    params: {
        foxEl: null,
        foxPosX: 64,
        foxPosY: 64,
        mousePosX: 0,
        mousePosY: 0,
        frameCount: 0,
        idleTime: 0,
        foxSpeed: 20,
        spriteSets: {
            idle: [
                [0, 0],
                [-1, 0],
                [-2, 0],
                [-3, 0],
                [-4, 0],
                [-5, 0],
                [-6, 0],
                [-7, 0],
            ],
            alert: [
                [-2, -1],
                [0, -1],
                [-1, -1],
            ],
            N: [
                [0, -3],
                [-1, -3],
                [-2, -3],
            ],
            NE: [
                [0, -3],
                [-1, -3],
                [-2, -3],
            ],
            E: [
                [-4, -2],
                [-5, -2],
                [-6, -2],
            ],
            SE: [
                [0, -2],
                [-1, -2],
                [-2, -2],
            ],
            S: [
                [0, -2],
                [-1, -2],
                [-2, -2],
            ],
            SW: [
                [0, -2],
                [-1, -2],
                [-2, -2],
            ],
            W: [
                [-4, -3],
                [-5, -3],
                [-6, -3],
            ],
            NW: [
                [0, -3],
                [-1, -3],
                [-2, -3],
            ],
        },
    },
    create: function create() {
        this.params.foxEl = document.createElement("div");
        this.params.foxEl.id = "followingCursor";

        document.body.appendChild(this.params.foxEl);

        document.onmousemove = (event) => {
            this.params.mousePosX = event.clientX;
            this.params.mousePosY = event.clientY;
        };

        window.followingCursorInterval = setInterval(this.frame, 100);
    },
    setSprite: function setSprite(name, frame) {
        const sprite = this.params.spriteSets[name][frame % this.params.spriteSets[name].length];
        this.params.foxEl.style.backgroundPosition = `${sprite[0] * 64}px ${sprite[1] * 64}px`;
    }, 
    frame: function frame() {
        followingCursor.params.frameCount += 1;
        const diffX = followingCursor.params.foxPosX - followingCursor.params.mousePosX;
        const diffY = followingCursor.params.foxPosY - followingCursor.params.mousePosY;
        const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

        if (distance < followingCursor.params.foxSpeed || distance < 48) {
            followingCursor.params.idleTime = 7;
            
            followingCursor.setSprite("idle", followingCursor.params.frameCount);
            return;
        }

        followingCursor.params.idleAnimation = null;
        followingCursor.params.idleAnimationFrame = 0;

        if (followingCursor.params.idleTime > 4) followingCursor.params.frameCount = 0;

        if (followingCursor.params.idleTime > 1) {
            followingCursor.setSprite("alert", followingCursor.params.frameCount);
            // count down after being alerted before moving
            followingCursor.params.idleTime = Math.min(followingCursor.params.idleTime, 4);
            followingCursor.params.idleTime -= 1;
            return;
        }

        let direction = diffY / distance > 0.5 ? "N" : "";
        direction += diffY / distance < -0.5 ? "S" : "";
        direction += diffX / distance > 0.5 ? "W" : "";
        direction += diffX / distance < -0.5 ? "E" : "";
        followingCursor.setSprite(direction, followingCursor.params.frameCount);

        followingCursor.params.foxPosX -= (diffX / distance) * followingCursor.params.foxSpeed;
        followingCursor.params.foxPosY -= (diffY / distance) * followingCursor.params.foxSpeed;

        followingCursor.params.foxEl.style.left = `${followingCursor.params.foxPosX - 32}px`;
        followingCursor.params.foxEl.style.top = `${followingCursor.params.foxPosY - 32}px`;
    },
    handleHideBtnClick: function () {
        console.log('hide');
        followingCursor.params.foxEl.classList.add('hidden');
        document.querySelector('.hide-following-cursor.show').classList.remove('hidden');
        document.querySelector('.hide-following-cursor.hide').classList.add('hidden');
    },
    handleShowBtnClick: function () {
        console.log("show");
        followingCursor.params.foxEl.classList.remove('hidden');
        document.querySelector('.hide-following-cursor.show').classList.add('hidden');
        document.querySelector('.hide-following-cursor.hide').classList.remove('hidden');
    },
}

export default followingCursor;