<script setup>
const emit = defineEmits(['isModalVisible'])

function close() {
    emit('close');
}
</script>

<template>
    <transition name="modal-fade">
        <div class="modal-backdrop text-black">
            <div class="modal min-w-[480px] min-h-[360px]"
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription"
            >
                <header class="modal-header" id="modalTitle">
                <button
                    type="button"
                    class="btn-close"
                    @click="close"
                    aria-label="Close modal"
                >
                    X
                </button>
                </header>
        
                <section class="modal-body" id="modalDescription">
                <slot name="body"></slot>
                </section>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.021);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
}
.modal {
    background: #FFFFFF;
    border-radius: 12px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}
.modal-header {
    padding: 20px;
    display: flex;
}
.modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
}
.modal-body {
    position: relative;
    padding: 20px 10px;
}
.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 18px;
    padding: 6px;
    cursor: pointer;
    font-weight: bold;
    color: #FA1212;
    background: transparent;
    margin: 3px;
}
.btn-close:focus {
    outline: none;
    border-radius: 0;
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease;
}
</style>