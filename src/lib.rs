
use node_bindgen::derive::node_bindgen;

#[node_bindgen]
fn give_str(s: &str) -> String {
    s.to_string()
}

#[node_bindgen]
fn give_string(s: String) -> String {
    s
}
