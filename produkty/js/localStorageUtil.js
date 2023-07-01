class LocalStorageUtil {
    constructor() {
        this.keyName = "products";
    }
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }
}
const localStorageUtil = new LocalStorageUtil();

// Organics
class LocalStorageOrganics {
    constructor() {
        this.keyName = "organics";
    }
    getOrganics() {
        const organicsLocalStorage = localStorage.getItem(this.keyName);
        if (organicsLocalStorage !== null) {
            return JSON.parse(organicsLocalStorage);
        }
        return [];
    }
}
const localStorageOrganics = new LocalStorageOrganics();

// NATURALS
class LocalStorageNaturals {
    constructor() {
        this.keyName = "naturals";
    }
    getNaturals() {
        const naturalsLocalStorage = localStorage.getItem(this.keyName);
        if (naturalsLocalStorage !== null) {
            return JSON.parse(naturalsLocalStorage);
        }
        return [];
    }
}
const localStorageNaturals = new LocalStorageNaturals();

// DLA DZIECI
class LocalStorageDzieci {
    constructor() {
        this.keyName = "dzieci";
    }
    getDzieci() {
        const dzieciLocalStorage = localStorage.getItem(this.keyName);
        if (dzieciLocalStorage !== null) {
            return JSON.parse(dzieciLocalStorage);
        }
        return [];
    }
}
const localStorageDzieci = new LocalStorageDzieci();

// DLA MEZCZYZN
class LocalStorageMezczyzn {
    constructor() {
        this.keyName = "mezczyzn";
    }
    getMezczyzn() {
        const mezczyznLocalStorage = localStorage.getItem(this.keyName);
        if (mezczyznLocalStorage !== null) {
            return JSON.parse(mezczyznLocalStorage);
        }
        return [];
    }
}
const localStorageMezczyzn = new LocalStorageMezczyzn();

// DO CIALA
class LocalStorageCialo {
    constructor() {
        this.keyName = "cialo";
    }
    getCialo() {
        const cialoLocalStorage = localStorage.getItem(this.keyName);
        if (cialoLocalStorage !== null) {
            return JSON.parse(cialoLocalStorage);
        }
        return [];
    }
}
const localStorageCialo = new LocalStorageCialo();

// DO OPALANIA
class LocalStorageOpalania {
    constructor() {
        this.keyName = "opalania";
    }
    getOpalania() {
        const opalaniaLocalStorage = localStorage.getItem(this.keyName);
        if (opalaniaLocalStorage !== null) {
            return JSON.parse(opalaniaLocalStorage);
        }
        return [];
    }
}
const localStorageOpalania = new LocalStorageOpalania();

// DO TWARZY
class LocalStorageTwarz {
    constructor() {
        this.keyName = "twarz";
    }
    getTwarz() {
        const twarzLocalStorage = localStorage.getItem(this.keyName);
        if (twarzLocalStorage !== null) {
            return JSON.parse(twarzLocalStorage);
        }
        return [];
    }
}
const localStorageTwarz = new LocalStorageTwarz();

// DO WLOSOW
class LocalStorageWlosy {
    constructor() {
        this.keyName = "wlosy";
    }
    getWlosy() {
        const wlosyLocalStorage = localStorage.getItem(this.keyName);
        if (wlosyLocalStorage !== null) {
            return JSON.parse(wlosyLocalStorage);
        }
        return [];
    }
}
const localStorageWlosy = new LocalStorageWlosy();


// MYDLA
class LocalStorageMydla {
    constructor() {
        this.keyName = "mydla";
    }
    getMydla() {
        const mydlaLocalStorage = localStorage.getItem(this.keyName);
        if (mydlaLocalStorage !== null) {
            return JSON.parse(mydlaLocalStorage);
        }
        return [];
    }
}
const localStorageMydla = new LocalStorageMydla();

