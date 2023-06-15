<template>
    <div>
        <section class="relative py-10 bg-gray-500 sm:py-16 lg:py-24">
            <div class="absolute inset-0">
                <video class="object-cover w-full h-full" src="../cloud-study.mp4" autoPlay loop muted alt="" />
            </div>
            <div class="absolute inset-0 bg-gray-900/20"></div>

            <div class="relative max-w-lg px-4 mx-auto sm:px-0">
                <div class="overflow-hidden bg-gradient-to-r from-rose-100 to-teal-100 rounded-md shadow-md">
                    <div class="px-4 py-6 sm:px-8 sm:py-7">
                        <div class="text-center">
                            <h2 class="text-3xl font-bold text-gray-500">Welcome back</h2>
                            <p class="mt-2 text-xs text-gray-500">have an account already ? <router-link to="/" title=""
                                    class="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">Login
                                </router-link></p>
                        </div>

                        <form @submit.prevent="login" class="mt-8">
                            <div class="space-y-5">
                                <div>
                                    <label for="" class="text-xs font-medium text-gray-500"> Email address </label>
                                    <div class="mt-2.5">
                                        <input type="name" v-model="name" id="" placeholder="Name"
                                            class="block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-blue-600 caret-blue-600" />
                                    </div>
                                </div>

                                <div>
                                    <div class="flex items-center justify-between">
                                        <label for="" class="text-base font-medium text-gray-500"> Password </label>


                                    </div>
                                    <div class="mt-2.5">
                                        <input type="email" v-model="email" placeholder="Email"
                                            class="block w-full p-3 text-gray-500 placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-blue-600 caret-blue-600" />
                                    </div>
                                    <div class="mt-2.5">
                                        <input type="Password" v-model="password" placeholder="Password"
                                            class="block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-blue-600 caret-blue-600" />
                                    </div>
                                </div>

                                <div>
                                    <button @click="registerUser"
                                        class="inline-flex items-center justify-center w-full px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Signup
                                    </button>
                                </div>


                            </div>
                        </form>
                        <div v-if="loggedIn">
                            <navbar :username="username"></navbar>
                            <p>Welcome, {{ username }}!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',



        }
    },
    methods: {
        registerUser() {
            console.log(this.name, this.email, this.password)
            axios.post('https://react-blog-api-bahdcasts.com/api/auth/register', {
                email: this.name,
                password: this.email,
                confirm: this.password
            })
                .then(response => {
                    this.$root.auth = response.data.data
                })
                .catch(({ response }) => {

                    console.log(response)
                })
        }
    }

}
</script>

<style lang="scss" scoped></style>