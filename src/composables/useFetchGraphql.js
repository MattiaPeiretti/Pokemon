import { toRefs, reactive } from "vue";

export default function (url, query, variables, operationName) {
    const state = reactive({
        response: [],
        error: null,
        fetching: false,
    });

    const fetchData = async () => {
        state.fetching = true;
        try {
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    query: query,
                    variables: variables,
                    operationName: operationName,
                }),
            });
            const json = await res.json();
            state.response = json;
        } catch (errors) {
            state.error = errors;
        } finally {
            state.fetching = false;
        }
    };

    return { ...toRefs(state), fetchData };
}
