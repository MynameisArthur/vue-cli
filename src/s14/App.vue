<template>
    <div class="container">
        <div class="row">
            <div
                class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
            >
                <h1>Animations</h1>
                <hr />
                <select v-model="alertAnimation" class="form-control my-4">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>

                <br />
                <button class="btn btn-primary" @click="show = !show">
                    Show Alert
                </button>
                <br /><br />
                <!-- <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="m249">
                        M249 SAW - 5.56 x 45mm NATO
                        <div class="w-25">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/PEO_M249_Para_ACOG.jpg/1920px-PEO_M249_Para_ACOG.jpg"
                                class="img-fluid"
                                alt="Responsive image"
                            />
                        </div>
                    </div>
                    <div class="alert alert-warning" v-else key="hk416">
                        HK416 - 5.56 x 45 mm NATO
                        <div class="w-25">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/HK416.jpg/1920px-HK416.jpg"
                                class="img-fluid"
                                alt="Responsive image"
                            />
                        </div>
                    </div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="m240">
                        M240 Lima - 7.62 x 51mm NATO
                        <div class="w-25">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/e/ea/PEO_M240B_Profile.jpg"
                                class="img-fluid"
                                alt="Responsive image"
                            />
                        </div>
                    </div>
                    <div class="alert alert-warning" v-else key="m24">
                        M24 SWS - 7.62 x 51mm NATO
                        <div class="w-25">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/IDF-M24-SWS-pic001.jpg/1920px-IDF-M24-SWS-pic001.jpg"
                                class="img-fluid"
                                alt="Responsive image"
                            />
                        </div>
                    </div>
                </transition> -->

                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="m2">
                        Browning M2 - 12.7 x 99 mm NATO
                        <div class="w-25">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/91/M2_Browning%2C_Mus%C3%A9e_de_l%27Arm%C3%A9e.jpg"
                                class="img-fluid"
                                alt="Responsive image"
                            />
                        </div>
                    </div>
                    <div class="alert alert-warning" v-else key="m82">
                        Barret M82 - 12.7 x 99 mm NATO
                        <div class="w-25">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/5a/M82A1_barrett.jpeg"
                                class="img-fluid"
                                alt="Responsive image"
                            />
                        </div>
                    </div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-success" v-if="show" key="mp5">
                        HK MP5 - 9 x 19 mm Parabellum
                        <div class="w-25">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Heckler_%26_Koch_MP5-2.jpg/1280px-Heckler_%26_Koch_MP5-2.jpg"
                                class="img-fluid"
                                alt="Responsive image"
                            />
                        </div>
                    </div>
                    <div class="alert alert-danger" v-else key="m9">
                        Beretta M9 - 9 x 19 mm Parabellum
                        <div class="w-25">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/61/M9-pistolet.jpg"
                                class="img-fluid"
                                alt="Responsive image"
                            />
                        </div>
                    </div>
                </transition>
                <hr />
                <button class="btn btn-primary" @click="load = !load">
                    Load / Remove Element
                </button>
                <br />
                <br />
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"
                >
                    <div
                        style="width: 300px; height: 100px; background-color: lightgreen"
                        v-if="load"
                    ></div>
                </transition>
                <hr />
                <button
                    class="btn btn-primary"
                    @click="
                        selectedComponent == 'appSuccessAlert'
                            ? (selectedComponent = 'appDangerAlert')
                            : (selectedComponent = 'appSuccessAlert')
                    "
                >
                    Toggle Components
                </button>
                <br />
                <br />
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr />
                <button class="btn btn-success" @click="addItem">
                    Add Item
                </button>
                <ul class="list-group my-5">
                    <transition-group name="slide">
                        <li
                            class="list-group-item"
                            v-for="(number, index) in numbers"
                            @click="removeItem(index)"
                            :key="number"
                            style="cursor: pointer;"
                        >
                            {{ number }}
                        </li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import DangerAlert from './DangerAlert';
import SuccessAlert from './SuccessAlert';
export default {
    components: {
        appDangerAlert: DangerAlert,
        appSuccessAlert: SuccessAlert,
    },
    data() {
        return {
            show: false,
            load: true,
            alertAnimation: 'fade',
            elementWidth: 100,
            selectedComponent: 'appSuccessAlert',
            numbers: [1, 2, 3, 4, 5],
        };
    },
    methods: {
        beforeEnter(el) {
            console.log('beforeEnter');
            this.elementWidth = 100;
            el.style.width = this.elementWidth + 'px';
        },
        enter(el, done) {
            console.log('enter');
            let round = 1;
            const interval = setInterval(() => {
                el.style.width = this.elementWidth + round * 10 + 'px';
                round++;
                if (round > 20) {
                    clearInterval(interval);
                    done();
                }
            }, 20);
        },
        afterEnter(el) {
            console.log('afterEnter');
        },
        enterCancelled(el, done) {
            console.log('enterCancelled');
            done();
        },
        afterCancelled(el) {
            console.log('afterCancelled');
        },
        beforeLeave(el) {
            console.log('beforeLeave');
            this.elementWidth = 300;
            el.style.width = this.elementWidth + 'px';
        },
        leave(el, done) {
            console.log('leave');
            let round = 1;
            const interval = setInterval(() => {
                el.style.width = this.elementWidth - round * 10 + 'px';
                round++;
                if (round > 20) {
                    clearInterval(interval);
                    done();
                }
            }, 20);
        },
        afterLeave(el) {
            console.log('afterLeave');
        },
        leaveCancelled(el) {
            console.log('leaveCancelled');
        },
        addItem() {
            const pos = Math.floor(Math.random() * this.numbers.length);
            this.numbers.splice(pos, 0, this.numbers.length + 1);
        },
        removeItem(index) {
            this.numbers.splice(index, 1);
        },
    },
};
</script>

<style>
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 1s;
}
.fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
}
.slide-enter {
    opacity: 0;
}
.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;
}

.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
}
.slide-move {
    transition: transform 1s;
}
.w-25 {
    mix-blend-mode: multiply;
}
@keyframes slide-in {
    from {
        transform: translateY(20px);
    }
    to {
        transform: translateY(0);
    }
}
@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(20px);
    }
}
</style>
